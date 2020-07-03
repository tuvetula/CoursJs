export interface CurrentUserModel {
    uid: string,
    email: string,
    user: UserFirestoreModel
}

export interface UserFirestoreModel {
    name: string,
    firstName: string,
    hasSubscribed: boolean,
    isAdmin: boolean,
    createdAt: number,
    updatedAt: number,
    profilPicture?: UserFirestoreProfilPictureModel
}

export interface UserFirestoreProfilPictureModel {
    url: string,
    storagePath: string
}