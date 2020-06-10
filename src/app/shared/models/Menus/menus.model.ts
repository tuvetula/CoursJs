export interface ChapterMenuModel {
  name: string,
  url: string,
  lessonsMenu: LessonMenuModel[],
  keywords?: string[]
}

export interface LessonMenuModel {
  name: string,
  url: string,
  keywords?: string[]
}
