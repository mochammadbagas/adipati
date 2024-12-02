import { Head, Link } from '@inertiajs/react';
import { IconBookOpenTextFill } from 'justd-icons';

import { AppLayout } from 'layouts';
import { Card, Container } from 'ui';

export default function Show(props: any) {
    const { data: article, related: articles } = props.article;
    console.log(articles);
    return (
        <>
            <Head title="Article" />
            {/* <Header title="Article" /> */}
            <div className="py-6 bg-bg sm:py-12 border-b mb-12">
                <Container>
                    <h1 className="text-xl sm:text-2xl text-center font-semibold tracking-tight">{article.title}</h1>
                    <h5 className="text-xs text-center tracking-tight">
                        {article.created_at} | {article.author.name}
                    </h5>
                </Container>
            </div>
            <Container>
                <p className="text-center">{article.body}</p>
            </Container>

            <Container className="mt-12">
                <div className="mb-6">Related Articles:</div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                    {articles.map((article: any) => (
                        <Card key={article.slug}>
                            <div className="px-6 pt-6">
                                <div className="size-8 grid place-content-center rounded-full border">
                                    <IconBookOpenTextFill />
                                </div>
                            </div>
                            <Card.Header>
                                <Card.Title>
                                    <Link href={route('article.show', article.slug)}>{article.title}</Link>
                                </Card.Title>
                                <Card.Description>{article.teaser}</Card.Description>
                            </Card.Header>
                        </Card>
                    ))}
                </div>
            </Container>
        </>
    );
}

Show.layout = (page: React.ReactNode) => <AppLayout children={page} />;
