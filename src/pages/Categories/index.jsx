import { useEffect, useState } from 'react';

import useToast from 'hooks/UseToast';
import { getCategories } from 'services/categories.service';

import * as Components from 'components';

export function Categories() {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);
  const { addToastError } = useToast();
  useEffect(() => {
    setLoading(true);
    getCategories()
      .then(res => {
        setCategories(res);
      })
      .catch(err => {
        addToastError(err);
      })
      .finally(() => setLoading(false));
  }, []);
  return (
    <Components.Layout titleSEO="Categorias" loading={loading}>
      <Components.CategoriesCard categories={categories} />
    </Components.Layout>
  );
}
