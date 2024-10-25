import Button from "../components/Elements/Button";

const ProductsPage = () => {
    return (
    <div className="flex justify-center py-5">
        <div className="w-full max-w-sm bg-gray-800 border border-gray-700 rounded-lg shadow">
            <a href="">
                <img src="/images/shoes-1.jpg" alt="product" className="p-8 rounded-t-lg" />
            </a>
        <div className="px-5 pb-5">
            <a href="">
                <h5 className="text-xl font-semibold tracking-tight text-white">Sepatu Baru</h5>
                <p className="text-s text-white">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto vitae tempora eum adipisci,
                    suscipit ullam nulla repudiandae
                    facere quisquam eos, animi eaque modi corrupti nam libero 
                    quaerat exercitationem! Animi, delectus.</p>
            </a>
        </div>
        <div className="flex items-center justify-between px-5 pb-5">
            <span className="text-xl font-bold text-white"> Rp. 1.000.000</span>
            <Button clasname="bg-blue-600">Add to Cart</Button>
        </div>
        </div>
    </div>
    );
}

export default ProductsPage;