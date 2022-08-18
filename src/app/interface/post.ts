export interface PostRequest {
    author: string;
    title: string;
    text: string;
    imageUrl: string;
}

export interface PostResponse extends PostRequest {
    id: number;
}
