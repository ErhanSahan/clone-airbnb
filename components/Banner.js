import Image from "next/image";
import background from "../resources/images/background.png"

export const Banner = () => {
    return (
        <div className={"relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600p] 2xl:h-[750px]"}>
            <Image src={background}
                   layout={"fill"}
                   objectFit={"cover"}
            />
            <div className="absolute top-1/2 w-full text-center">
                <p className="text-sm sm:text-lg">Not sure where to go?</p>
                <button className="text-purple-500 bg-white px-10 py-4 shadow-md rounded-full font-bold my-3 hover:shadow-xl active:scale-90 transition duration-150">I'm Flexible</button>
            </div>
        </div>
    )

}