import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'

import { faTwitter,faFacebook,faPinterest, faGithub, faWhatsapp, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faHouse } from '@fortawesome/free-solid-svg-icons'
import { faUser } from '@fortawesome/free-regular-svg-icons'
library.add(faTwitter, faFacebook, faPinterest, faGithub, faWhatsapp, faInstagram, faHouse, faUser)


const NftCard = ({ image, id, title, symbol, address, description, attributes }) => {
    return (
        <div className="shadow-lg w-1/4 mr-3 mb-4 bg-slate-100 rounded-md" >
            <img className='object-cover h-96 w-96' key={id} src={image}></img>
            <div className="p-3">
                <div className="flex mb-3">
                    <div className="flex-grow">
                        <h3 className="text-lg font-bold">{title? title.slice(0, 100) : symbol}</h3>
                        {/* <p>{`${id.slice(0, 4)}...${id.slice(id.length - 4)}`}</p> */}
                    </div>
                    <div className="flex mr-3">
                        {/* <a target="_blank" className="text-blue-700" href={`https://goerli.etherscan.io/token/${address}`}>{`${address.slice(0, 4)}...${address.slice(address.length - 4)}`}</a> */}
                        <a target="_blank" className="text-cyan-500" href={`https://goerli.etherscan.io/token/${address}`}><p className="text-xs font-bold">Ether Scan</p></a>
                    </div>
                </div>
                {/* <p>{description? description.slice(0, 200) : "No Description"}</p> */}
            </div>
            <hr />
            <div className="flex flex-wrap justify-center items-center p-2 ">
                {attributes?.length > 0 && attributes.map(attribute => {
                    return (
                        <div className="w-1/2 mb-2 flex justify-start flex-col">
                            <p className="mr-2 text-xs font-bold">{attribute.trait_type}:</p>
                            <p className="text-xs">{attribute.value}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default NftCard