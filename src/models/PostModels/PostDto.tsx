export interface PostDto {
    postId: string
    type: PostTypeDto
    media: PostMediaType
    description: string
    location: LocationDto
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
    comment: string
    commentedBy: UserDto
    commentedAt: string
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
    name: string
}

export interface UserDto {
    userId: string
    username: string
    profileImagePath: string
};

export type PostMediaType = VideoPostDto | ImagePostDto;

export interface VideoPostDto {
    videoPath: string,
    thumbnailPath: string
}

export interface ImagePostDto {
    imagePath: string
}