import { useRouter } from "next/router"
import Footer from "../components/Footer"
import Header from "../components/header"
import format from "date-fns/format";
import InfoCard from "../components/InfoCard";



function Search({searchResult}) {
    const router = useRouter();



    const {location,startDate,endDate,noOfGuest}=router.query;

    const FormattedStartDate = format(new Date(startDate),"dd-MMM-yy")
    const FormattedEndDate = format(new Date(endDate),"dd-MMM-yy")
    const ranges = `${FormattedStartDate}-${FormattedEndDate}`

    return (
    <div>
        <Header placeholder = {`${location} | ${ranges} | ${noOfGuest} guests`}/>

        <main className=" flex">
            <section className="flex-grow pt-14 px-6">
                <p className="text-xs">300+ stays- {ranges} for {noOfGuest} Guests</p>

                <h1 className=" text-3xl font-semibold mb-6 mt-2">
                     Stays in {location}
                </h1>

                <div className="hidden lg:inline-flex mb-5 space-x-3 text-gray-800 whitespace-nowrap">
                    <p className="button">
                         Cancelletion Flexibility
                    </p>
                    <p className="button">
                         Type of Place
                    </p>
                    <p className="button">
                         Price
                    </p>
                    <p className="button">
                         Rooms and Bed
                    </p>
                    <p className="button">
                        More Filters
                    </p>
                </div>


               <div className="flex flex-col">
               {searchResult.map(({img,location,title,description,star,price,total}) =>(
                    <InfoCard
                        key={img}
                        img={img}
                        location={location}
                        title ={title}
                        description={description}
                        star ={star}
                        price={price}
                        total={total}


                    />
                ))}

               </div>

            </section>

        </main>



        <Footer/>
    </div>
  )
}

export default Search;


export async function getServerSideProps() {
    const searchResult = await fetch ("https://links.papareact.com/isz").then(res => res.json());
    return{
        props : {
            searchResult,
        }
    }
}