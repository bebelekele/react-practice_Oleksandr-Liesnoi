export const Product = ({ prepProduct }) => {
  return (
    <tr data-cy="Product">
      <td className="has-text-weight-bold" data-cy="ProductId">
        {prepProduct.product.id}
      </td>

      <td data-cy="ProductName">{prepProduct.product.name}</td>
      <td data-cy="ProductCategory">
        {prepProduct.category.icon} - {prepProduct.category.title}
      </td>

      <td data-cy="ProductUser" className="has-text-link">
        {prepProduct.user.name}
      </td>
    </tr>
  );
};
