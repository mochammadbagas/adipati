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

export default function Create() {
    const { categoriesArticle, articleTags } = usePage().props;

    const selectedItems = useListData<SelectedKey>({
        initialItems: []
    });

    const { data, setData, post, processing, reset, errors } = useForm({
        title: '',
        teaser: '',
        body: '',
        picture: null as File | null,
        article_tags: [] as number[],
        articleCategory_id: ''
    });

    useEffect(() => {
        setData('article_tags', selectedItems.items.map((item) => item.id) as number[]);
    }, [selectedItems.items]);

    const submit = (e: { preventDefault: () => void }) => {
        e.preventDefault();

        post(route('article.store', data), {
            preserveScroll: true,
            onSuccess: () => {
                toast.success('Artikel anda sukses dibuat.');
                reset();
            },
            onError: () => {
                toast.error('Gagal');
            }
        });
    };

    return (
        <>
            <Head title="Create Article" />
            <Header title="Create Article" />

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

Create.layout = (page: React.ReactNode) => <AppLayout children={page} />;
