import EditCarPage from './page';

interface EditCarPageProps {
  params: {
    id: string;
  };
}

export default function EditCar({ params }: EditCarPageProps) {
  return <EditCarPage params={params} />;
}