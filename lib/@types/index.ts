export type EmojiGetArg = string | number

export interface EmojiResult {
    id: number;
    title: string;
    slug: string;
    image: string;
    description: string;
    category: number;
    license: string;
    source: string;
    faves: number;
    submitted_by: string;
    width: number;
    height: number;
    filesize: number;
}

export interface EmojiGgStats {
    emoji: number;
    packs: number;
    kaomoji: number;
    users: number;
    downloads: number;
    pending_approvals: number;
    pending_pack_approvals: number;
}