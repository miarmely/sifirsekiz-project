export interface PostDto {
    postId: string
    type: PostTypeDto
    description: string
    likes: PostLikeDto[]
    comments: PostCommentDto[]
    shares: PostShareDto[]
    bookmarks: PostBookmarkDto[]
    publishedBy: UserDto
    publishedAt: string
};

export interface PostTypeDto {
    postTypeId: string
    type: string
};

export interface PostLikeDto {
    postLikeId: string
    likedBy: UserDto
    likedAt: string
}

export interface PostCommentDto {
    postCommentId: string
    Comment: string
    CommentedBy: UserDto
    CommentedAt: string
}

export interface PostShareDto {
    postShareId: string
    sharedToList: UserDto[]
    sharedBy: UserDto
    sharedAt: string
}

export interface PostBookmarkDto {
    postBookmarkId: string
    bookmarkedBy: UserDto
    bookmarkedAt: string
}

export interface LocationDto {
    locationId: string,
    locationName: string
}

export interface UserDto {
    userId: string
    username: string
};