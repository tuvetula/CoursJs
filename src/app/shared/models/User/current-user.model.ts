export interface UserFirestoreModel {
    uid: string,
    name: string,
    firstName: string,
    email: string,
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