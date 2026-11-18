import type { ReactNode } from "react";

export interface District {
    name: string
    icon: ReactNode
    coverImagePath: string
}

export interface VideoDetails {
    owner: UserModel
    location: string
    description: string
    likes: PostLikes[]
    comments: PostComments[]
    shareCount: number
    publishedAt: string
}

export interface UserModel {
    username: string
    profileImagePath: string
}

export interface PostLikes {
    likedBy: UserModel
}

export interface PostComments {
    commentedBy: UserModel
    comment: string
}