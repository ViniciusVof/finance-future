import categories from 'mock/categories.json';

import * as Components from 'components';

export function Categories() {
  return (
    <Components.Layout titleSEO="Categorias">
      <Components.CategoriesCard categories={categories} />
    </Components.Layout>
  );
}
