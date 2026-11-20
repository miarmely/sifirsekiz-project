export interface PostDetails {
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