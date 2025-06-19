interface ProductPageProps {
    params: {
        id: string;
    };
}

const ProductDetail = ({ params }: ProductPageProps) => {
    return (
        <div>
            <h1>Product ID: {params.id}</h1>
            <p>This is the detail page for product {params.id}.</p>
        </div>
    );
};

export default ProductDetail;
