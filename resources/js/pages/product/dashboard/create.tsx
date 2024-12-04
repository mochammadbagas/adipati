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
    const { categoriesProduct, productTags } = usePage().props;

    const selectedItems = useListData<SelectedKey>({
        initialItems: []
    });

    const { data, setData, post, processing, reset, errors } = useForm({
        title: '',
        description: '',
        price: '',
        picture: null as File | null,
        product_tags: [] as number[],
        productCategory_id: ''
    });

    useEffect(() => {
        setData('product_tags', selectedItems.items.map((item) => item.id) as number[]);
    }, [selectedItems.items]);

    const submit = (e: { preventDefault: () => void }) => {
        e.preventDefault();

        post(route('product.store', data), {
            preserveScroll: true,
            onSuccess: () => {
                toast.success('Produk anda sukses dibuat.');
                reset();
            },
            onError: () => {
                toast.error('Gagal');
            }
        });
    };

    return (
        <>
            <Head title="Create Product" />
            <Header title="Create Product" />

            <Container>
                <Card className="p-6">
                    <Card.Header>
                        <Card.Title>Share Your Product Today!</Card.Title>
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
                                    errorMessage={errors.productCategory_id}
                                    onSelectionChange={(v: any) => setData('productCategory_id', v)}
                                >
                                    <Select.Trigger />
                                    <Select.List items={categoriesProduct as any}>
                                        {(item: any) => (
                                            <Select.Option id={item.id} textValue={item.name} value={item.id}>
                                                {item.name}
                                            </Select.Option>
                                        )}
                                    </Select.List>
                                </Select>
                                <MultipleSelect
                                    label="Type"
                                    selectedItems={selectedItems}
                                    items={productTags as any}
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
                            <TextArea
                                id="description"
                                label="Description"
                                value={data.description}
                                type="text"
                                className="mt-1"
                                autoFocus
                                onChange={(v) => setData('description', v)}
                                errorMessage={errors.description}
                                autoComplete="description"
                                isRequired
                            />
                            <TextField
                                id="price"
                                label="Price"
                                value={data.price}
                                type="text"
                                className="mt-1"
                                autoFocus
                                onChange={(v) => setData('price', v)}
                                errorMessage={errors.price}
                                autoComplete="price"
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
