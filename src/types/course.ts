export type Course = {
  id: number;
  code: string;
  title: string;
  credits: number;
  isOpen: boolean;
  isFavorite: boolean;
  onToggleFavorite: (id: number) => void;
};

