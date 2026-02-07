
export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      projects: {
        Row: {
          id: string
          created_at: string
          slug: string
          title: string
          summary: string | null
          content: string | null
          image: string | null
          date: string | null
          tech_stack: string[] | null
          link: string | null
          featured: boolean
        }
        Insert: {
          id?: string
          created_at?: string
          slug: string
          title: string
          summary?: string | null
          content?: string | null
          image?: string | null
          date?: string | null
          tech_stack?: string[] | null
          link?: string | null
          featured?: boolean
        }
        Update: {
          id?: string
          created_at?: string
          slug?: string
          title?: string
          summary?: string | null
          content?: string | null
          image?: string | null
          date?: string | null
          tech_stack?: string[] | null
          link?: string | null
          featured?: boolean
        }
      }
      blogs: {
        Row: {
          id: string
          created_at: string
          slug: string
          title: string
          summary: string | null
          content: string | null
          image: string | null
          date: string | null
          reading_time: string | null
          published: boolean
        }
        Insert: {
          id?: string
          created_at?: string
          slug: string
          title: string
          summary?: string | null
          content?: string | null
          image?: string | null
          date?: string | null
          reading_time?: string | null
          published?: boolean
        }
        Update: {
          id?: string
          created_at?: string
          slug?: string
          title?: string
          summary?: string | null
          content?: string | null
          image?: string | null
          date?: string | null
          reading_time?: string | null
          published?: boolean
        }
      }
      experience: {
        Row: {
          id: string
          created_at: string
          company: string
          role: string
          date_range: string
          description: string
          display_order: number
        }
        Insert: {
          id?: string
          created_at?: string
          company: string
          role: string
          date_range: string
          description: string
          display_order?: number
        }
        Update: {
          id?: string
          created_at?: string
          company?: string
          role?: string
          date_range?: string
          description?: string
          display_order?: number
        }
      }
    }
  }
}
