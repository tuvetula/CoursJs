export interface UserFirestoreModel {
    name: string,
    firstName: string,
    isAdmin: boolean,
    createdAt: number,
    updatedAt: number,
    profilPictureUrl?: string
}