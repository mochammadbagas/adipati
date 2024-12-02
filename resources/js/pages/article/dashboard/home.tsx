import { Head, Link, router } from '@inertiajs/react';
import { IconDotsVertical } from 'justd-icons';
import { AppLayout } from 'layouts';
import { Button, Card, Container, Menu, Pagination, Table } from 'ui';

function handleDelete(slug: string) {
    if (confirm('Are you sure you want to delete this item?')) {
        router.visit(route('article.destroy', slug), {
            method: 'delete', // Menentukan metode DELETE
            onSuccess: () => {
                alert('Article deleted successfully!');
            },
            onError: (errors) => {
                console.error(errors);
                alert('Failed to delete the article.');
            }
        });
    }
}

export default function Home(props: any) {
    const { data: articles, meta, links } = props.articles;

    return (
        <>
            <Head title="Your List of Articles" />
            <div className="py-6 bg-bg sm:py-12 border-b mb-12">
                <Container>
                    <h1 className="text-xl sm:text-2xl font-semibold tracking-tight">Your List of Articles</h1>
                </Container>
            </div>
            <Container>
                <Button className="mb-12">
                    <Link href={route('article.create')}>Add New Article</Link>
                </Button>
                <Card>
                    <Table aria-label="Products">
                        <Table.Header>
                            <Table.Column className="w-0">#</Table.Column>
                            <Table.Column isRowHeader>Name</Table.Column>
                            <Table.Column />
                        </Table.Header>
                        <Table.Body items={articles}>
                            {(item: any) => (
                                <Table.Row id={item.id}>
                                    <Table.Cell>{item.id}</Table.Cell>
                                    <Table.Cell>{item.title}</Table.Cell>

                                    <Table.Cell>
                                        <div className="flex justify-end">
                                            <Menu>
                                                <Menu.Trigger>
                                                    <IconDotsVertical />
                                                </Menu.Trigger>
                                                <Menu.Content aria-label="Actions" showArrow placement="left">
                                                    <Menu.Item href={route('article.show', item.slug)}>View</Menu.Item>
                                                    <Menu.Item href={route('article.edit', item.slug)}>Edit</Menu.Item>
                                                    <Menu.Separator />
                                                    <Menu.Item isDanger onAction={() => handleDelete(item.slug)}>
                                                        Delete
                                                    </Menu.Item>
                                                </Menu.Content>
                                            </Menu>
                                        </div>
                                    </Table.Cell>
                                </Table.Row>
                            )}
                        </Table.Body>
                    </Table>
                </Card>
                <Pagination className="mt-12">
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

Home.layout = (page: React.ReactNode) => <AppLayout children={page} />;
