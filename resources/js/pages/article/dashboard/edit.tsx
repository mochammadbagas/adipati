import { Head, useForm, usePage } from '@inertiajs/react';
import { Header } from 'components/header';
import { AppLayout } from 'layouts';
import React, { useEffect } from 'react';
import { useListData } from 'react-stately';
import { toast } from 'sonner';
import {
    Button,
    Card,
    Container,
    Form,
    Input,
    Label,
    MultipleSelect,
    Select,
    SelectedKey,
    TextArea,
    TextField
} from 'ui';

export default function Edit({ article }: any) {
    const { categoriesArticle, articleTags } = usePage().props;

    const selectedItems = useListData<SelectedKey>({
        initialItems: article.tags
    });

    const { data, setData, patch, processing, reset, errors } = useForm({
        title: article.title ?? '',
        teaser: article.teaser ?? '',
        body: article.body ?? '',
        picture: null as File | null,
        article_tags: article.tags ?? '',
        articleCategory_id: article.category.id ?? ''
    });
    useEffect(() => {
        setData('article_tags', selectedItems.items.map((item) => item.id) as number[]);
    }, [selectedItems.items]);

    const submit = (e: { preventDefault: () => void }) => {
        e.preventDefault();

        patch(route('article.update', article.slug), {
            preserveScroll: true,
            onSuccess: () => {
                toast.success('Artikel anda sukses diupdate.');
                reset();
            },
            onError: () => {
                toast.error('Gagal mengupdate artikel.');
            }
        });
    };

    return (
        <>
            <Head title="Edit Article" />
            <Header title="Edit Article" />

            <Container>
                <Card className="p-6">
                    <Card.Header>
                        <Card.Title>Share Your Story Today!</Card.Title>
                        <Card.Description>
                            Create compelling articles that inspire, inform, and engage—it's quick, simple, and
                            impactful. Start now!
                        </Card.Description>
                    </Card.Header>
                    <Card.Content className="space-y-6">
                        <Form onSubmit={submit} validationErrors={errors} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                <div className="flex flex-col gap-[6px]">
                                    <Label htmlFor="picture">Thumbnail</Label>
                                    <Input
                                        className="border border-input rounded-lg hover:bg-neutral-900 py-[6px]"
                                        type="file"
                                        onChange={(e) => setData('picture', e.target.files ? e.target.files[0] : null)}
                                    />
                                </div>
                                <Select
                                    label="Category"
                                    placeholder="Select a category"
                                    errorMessage={errors.articleCategory_id}
                                    defaultSelectedKey={data.articleCategory_id}
                                    onSelectionChange={(v: any) => setData('articleCategory_id', v)}
                                >
                                    <Select.Trigger />
                                    <Select.List items={categoriesArticle as any}>
                                        {(item: any) => (
                                            <Select.Option id={item.id} textValue={item.name} value={item.id}>
                                                {item.name}
                                            </Select.Option>
                                        )}
                                    </Select.List>
                                </Select>
                                <MultipleSelect
                                    label="Tag"
                                    selectedItems={selectedItems}
                                    items={articleTags as any}
                                    tag={(item) => (
                                        <MultipleSelect.Tag key={item.id} textValue={item.name}>
                                            {item.name}
                                        </MultipleSelect.Tag>
                                    )}
                                >
                                    {(item) => {
                                        return (
                                            <MultipleSelect.Option key={item.id} textValue={item.name}>
                                                {item.name}
                                            </MultipleSelect.Option>
                                        );
                                    }}
                                </MultipleSelect>
                            </div>
                            <TextField
                                id="title"
                                label="Title"
                                value={data.title}
                                type="text"
                                className="mt-1"
                                autoFocus
                                onChange={(v) => setData('title', v)}
                                errorMessage={errors.title}
                                autoComplete="title"
                                isRequired
                            />
                            <TextField
                                id="teaser"
                                label="Teaser"
                                value={data.teaser}
                                type="text"
                                className="mt-1"
                                autoFocus
                                onChange={(v) => setData('teaser', v)}
                                errorMessage={errors.teaser}
                                autoComplete="teaser"
                                isRequired
                            />
                            <TextArea
                                id="body"
                                label="Body"
                                value={data.body}
                                type="text"
                                className="mt-1"
                                autoFocus
                                onChange={(v) => setData('body', v)}
                                errorMessage={errors.body}
                                autoComplete="body"
                                isRequired
                            />

                            <div className="flex items-center justify-between">
                                <Button type="submit" isDisabled={processing}>
                                    Submit
                                </Button>
                            </div>
                        </Form>
                    </Card.Content>
                </Card>
            </Container>
        </>
    );
}

Edit.layout = (page: React.ReactNode) => <AppLayout children={page} />;
