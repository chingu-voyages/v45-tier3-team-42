import { useRouter } from 'next/router';
import Layout from '../components/Layout';
import { GetServerSideProps } from 'next';

type Item = {
  _id: string;
  name: string;
  description: string;
};

type Props = {
  item: Item;
};

function ItemPage({ item }: Props) {
  const router = useRouter();

  function handleEdit() {
    // Code to handle editing (You can expand this later)
    alert('Edit functionality not implemented yet!');
  }

  async function handleDelete() {
    // Make a request to the deleteItem API endpoint
    try {
      const res = await fetch(`/api/deleteItem?_id=${item._id}`, { method: 'DELETE' });
      const data = await res.json();
      if (data.success) {
        // Redirect to the homepage after successful deletion
        router.push('/');
      } else {
        console.error('Failed to delete item');
      }
    } catch (error) {
      console.error('An error occurred while deleting the item.', error);
    }
  }

  if (!item) {
    return (
        <Layout>
            <div className="p-4">
                <h1>Item not found</h1>
            </div>
        </Layout>
    );
  }

  return (
    <Layout>
      <div className="p-4">
        <h1 className="text-2xl mb-4">{item.name}</h1>
        <p>{item.description}</p>
        <div className="mt-4">
          <button onClick={handleEdit} className="mr-4 p-2 bg-blue-500 text-white">Edit</button>
          <button onClick={handleDelete} className="p-2 bg-red-500 text-white">Delete</button>
        </div>
      </div>
    </Layout>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  try {
    if (!context.params) {
      return { props: {} };
    }
    
    const { _id } = context.params as { _id: string };
    const res = await fetch(`http://localhost:3000/api/getItem?_id=${_id}`);
    const item: Item = await res.json();

    if (!item) {
      return { props: {} };
    }
    
    return {
      props: {
        item,
      },
    };
  } catch (e) {
    console.error(e);
    return {
      props: {},
    };
  }
};

export default ItemPage;
