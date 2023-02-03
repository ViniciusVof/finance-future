import { useEffect, useState } from 'react';

import { getCategories } from 'services/categories.service';

import * as Components from 'components';

export function Categories() {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    getCategories().then(res => {
      setCategories(res);
    });
  }, []);
  return (
    <Components.Layout titleSEO="Categorias">
      <Components.CategoriesCard categories={categories} />
    </Components.Layout>
  );
}
