import Image from "next/image";


const Loading = () => {
    return (
        <div>
            <Image
                src="/assets/img/loading/loading.svg"
                class="img-fluid rounded-top"
                alt=""
            />
            
        </div>
    );
};

export default Loading;