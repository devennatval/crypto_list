interface TagLanguage {
    id: number;
    name: string;
    created_at: string;
    updated_at: string;
}

interface TagImage {
    id: number;
    name: string;
    hash: string;
    sha256: string | null;
    ext: string;
    mime: string;
    size: number;
    url: string;
    provider: string;
    provider_metadata: unknown | null;
    created_at: string;
    updated_at: string;
    alternativeText: string;
    caption: string;
    width: number;
    height: number;
    formats: {
        small?: TagFormat;
        thumbnail?: TagFormat;
    } | null;
    previewUrl: string | null;
}

interface TagFormat {
    ext: string;
    url: string;
    hash: string;
    mime: string;
    name: string;
    path: string | null;
    size: number;
    width: number;
    height: number;
}

interface TagCurrency {
    id: number;
    name: string;
    created_at: string;
    updated_at: string;
}

export interface MarketTag {
    id: number;
    title: string;
    subtitle: string | null;
    language: TagLanguage;
    url: string | null;
    published_at: string;
    created_at: string;
    updated_at: string;
    statusbar: string;
    order: number | null;
    slug: string;
    meta_title: string | null;
    meta_description: string | null;
    icon: TagImage;
    image: TagImage | null;
    currencies: TagCurrency[];
}
