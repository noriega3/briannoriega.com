export type Json = string | number | boolean | null | { [key: string]: Json } | Json[];

export interface ProjectRow {
  id: number;
  year: number;
  project: string;
  at?: string | null;
  skills: string;
  linkText?: string | null;
  link?: string | null;
  is_github?: boolean | null;
}

export interface Database {
  public: {
    Tables: {
      projects_v0: {
        Row: ProjectRow;
        Insert: {
          id?: number;
          year: number;
          project: string;
          at?: string | null;
          skills: string;
          linkText?: string | null;
          link?: string | null;
          is_github?: boolean | null;
        };
        Update: {
          id?: number;
          year: number;
          project: string;
          at?: string | null;
          skills: string;
          linkText?: string | null;
          link?: string | null;
          is_github?: boolean | null;
        };
      };
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      [_ in never]: never;
    };
    Enums: {
      [_ in never]: never;
    };
    CompositeTypes: {
      [_ in never]: never;
    };
  };
}
