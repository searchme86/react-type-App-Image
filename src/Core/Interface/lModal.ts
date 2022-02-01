export interface lModalProps {
  open: boolean;
  close: () => void;
  header: string;
  children: React.ReactNode;
}
