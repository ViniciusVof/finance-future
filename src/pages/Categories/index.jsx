import { useEffect, useState } from 'react';

import { getCategories } from 'services/categories.service';

import * as Components from 'components';

export function Categories() {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    getCategories()
      .then(res => {
        setCategories(res);
      })
      .finally(() => setLoading(false));
  }, []);
  return (
    <Components.Layout titleSEO="Categorias" loading={loading}>
      <Components.CategoriesCard categories={categories} />
    </Components.Layout>
  );
}
