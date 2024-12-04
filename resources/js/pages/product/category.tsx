import { Head, Link, usePage } from '@inertiajs/react';
import { IconBookOpenTextFill } from 'justd-icons';
import { AppLayout } from 'layouts';
import { Card, Container, Pagination } from 'ui';

interface Category {
    slug: string;
    name: string;
}

interface PageProps {
    categoriesProduct: Category[];
    [key: string]: any; // Tambahkan properti lain di sini jika ada
}

export default function Category(props: any) {
    const { data: products, meta, links } = props.data;
    const { categoriesProduct } = usePage<PageProps>().props;

    return (
        <>
            <Head title="Article Category" />

            <div className="py-6 bg-bg sm:py-12 border-b mb-12">
                <Container>
                    <h1 className="text-xl sm:text-2xl font-semibold tracking-tight">Product</h1>
                    <div className="flex gap-4 mt-6">
                        <Link href={route('product')} className="hover:text-blue-500 text-sm">
                            All
                        </Link>
                        {categoriesProduct.map((category) => (
                            <Link
                                href={route('product.category', category.slug)}
                                key={category.slug}
                                className="hover:text-blue-500 text-sm"
                            >
                                {category.name}
                            </Link>
                        ))}
                    </div>
                </Container>
            </div>

            <Container>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                    {products.map((product: any) => (
                        <Card key={product.slug}>
                            <div className="px-6 pt-6">
                                <div className="size-8 grid place-content-center rounded-full border">
                                    <IconBookOpenTextFill />
                                </div>
                            </div>
                            <Card.Header>
                                <Card.Title>
                                    <Link href={route('product.show', product.slug)}>{product.title}</Link>
                                </Card.Title>
                                <Card.Description>{product.teaser}</Card.Description>
                            </Card.Header>
                        </Card>
                    ))}
                </div>
                <Pagination>
                    <Pagination.List>
                        <Pagination.Item variant="first" href={links.first} />
                        <Pagination.Item variant="previous" href={links.prev} />
                        <Pagination.Section aria-label="Pagination Segment" className="rounded-lg border">
                            <Pagination.Item variant="label">{meta.current_page}</Pagination.Item>
                            <Pagination.Item variant="separator" />
                            <Pagination.Item className="text-muted-fg" variant="label">
                                {meta.last_page}
                            </Pagination.Item>
                        </Pagination.Section>
                        <Pagination.Item variant="next" href={links.next} />
                        <Pagination.Item variant="last" href={links.last} />
                    </Pagination.List>
                </Pagination>
            </Container>
        </>
    );
}

Category.layout = (page: React.ReactNode) => <AppLayout children={page} />;
