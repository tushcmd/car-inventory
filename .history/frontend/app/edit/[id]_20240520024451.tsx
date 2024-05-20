

'use client';

import EditCar from '@/components/edit-car';

interface EditCarPageProps {
  params: {
    id: string;
  };
}

const EditCarPage: React.FC<EditCarPageProps> = ({ params }) => {
  return (
    <div className="create-edit-page-container min-h-screen">
      <EditCar params={params} />
    </div>
  );
};

export default EditCarPage;

{/*
import EditCarPage from './page';

interface EditCarPageProps {
  params: {
    id: string;
  };
}

export default function EditCar({ params }: EditCarPageProps) {
  return <EditCarPage params={params} />;
}

*/}