import React, {useState, useEffect, useRef} from "react";
import {useDispatch, useSelector} from 'react-redux';
import Header from '../../../components/Header/Header';
import Footer from '../../../components/Footer/Footer';
import {
    getProfileSettingAction
} from "../../../redux/action/userProfileAction/profileUpdateAction/profileSettingAction";
import DivisionAndDistrictModal from "../../../components/CommonComponents/Modal/DivisionAndDistrictModal";
import AdCategoryModal from "../../../components/CommonComponents/Modal/AdCategoryModal";
import { 
    getAdDistrictNameAction,
    getAdEditAction, getAdSubCategoryNameAction, 
    postAdUpdateAction
} from "../../../redux/action/userProfileAction/profileAdAction";
import {useNavigate, useParams} from "react-router-dom";
 
import {getAdCategory, getDistrict, getSubCategory} from "../../../Utilities/Utilities"; 
import EditSelectField from "../../../components/AdComponents/Form/Edit/EditSelectField";
import EditTextField from "../../../components/AdComponents/Form/Edit/EditTextField";
import EditTextAria from "../../../components/AdComponents/Form/Edit/EditTextAria";
import EditRadio from "../../../components/AdComponents/Form/Edit/EditRadio"; 
import {languageCheck} from "../../../helpers/Helpers";

const AdEdit = () => {
    const AdEdit = useParams();
    const dispatch = useDispatch();


    const [adCategorySelect, setAdCategorySelect] = useState(false);
    const [categoryParam, setCategoryParam] = useState([]);
    const [locationRoute, setLocationRoute] = useState('')
    const [jobCategorySave, setJobCategorySave] = useState(false);
    const [categoryParamRoute, setCategoryParamRoute] = useState(false);
    const [adCategorySave, setAdCategorySave] = useState(false);

    const [firstImagePreview, setFirstImagePreview] = useState(false);
    const [firstImageCheck, setFirstImageCheck] = useState('');
    const [firstImageStore, setFirstImageStore] = useState(false);
    const [secondImagePreview, setSecondImagePreview] = useState(false);
    const [secondImageStore, setSecondImageStore] = useState(false);
    const [thirdImagePreview, setThirdImagePreview] = useState(false);
    const [thirdImageStore, setThirdImageStore] = useState(false);
    const [forthImagePreview, setForthImagePreview] = useState(false);
    const [forthImageStore, setForthImageStore] = useState(false);
    const [fiveImagePreview, setFiveImagePreview] = useState(false);
    const [fiveImageStore, setFiveImageStore] = useState(false);
    const [isPriceOnCall, setIsPriceOnCall] = useState('');
    const [isShowContact, setIsShowContact] = useState('');
    const [conditionCheck, setConditionCheck] = useState('');

    const [checkAdvertisementVisible, setCheckAdvertisementVisible] = useState(false);

    const firstImageRequried = useRef(null)


    const divisionAndDistrict = getDistrict();
    const subCategory = getSubCategory();
    const adCategory = getAdCategory();

    const {getAdEdit} = useSelector(state => state.getAdEditReducer)
    useEffect(() => {
        dispatch(getAdEditAction(AdEdit?.id))
    }, [AdEdit?.id])

    const {getAdSubCategoryName} = useSelector(state => state.getAdSubCategoryNameReducer)
    const {getAdDistrictName} = useSelector(state => state.getAdDistrictNameReducer)

    useEffect(() => {
        dispatch(getAdSubCategoryNameAction(getAdEdit?.ad_sub_category))
        dispatch(getAdDistrictNameAction(getAdEdit?.district))

        setIsPriceOnCall(getAdEdit?.is_price_on_call)
        setIsShowContact(getAdEdit?.is_show_contact_number)
        setConditionCheck(getAdEdit?.condition)

        setFirstImagePreview(getAdEdit?.image_1 ?? false)
        setSecondImagePreview(getAdEdit?.image_2 ?? false)
        setThirdImagePreview(getAdEdit?.image_3 ?? false)
        setForthImagePreview(getAdEdit?.image_4 ?? false)
        setFiveImagePreview(getAdEdit?.image_5 ?? false)
        setFirstImageCheck('')

    }, [getAdEdit])

    let adCategoryName = '';
    let adCategoryId = '';
    let subCategoryName = '';
    let subCategoryId = '';
    let divisionId = '';
    let districtId = '';
    let districtName = '';

    adCategoryId = getAdEdit?.ad_category;
    subCategoryName = getAdEdit && getAdSubCategoryName ? getAdSubCategoryName : '';
    subCategoryId = getAdEdit?.ad_sub_category;
    divisionId = getAdEdit?.division;
    districtId = getAdEdit?.district;
    districtName = getAdEdit && getAdDistrictName ? getAdDistrictName : '';

    if (divisionAndDistrict) {
        districtName = divisionAndDistrict.name
        districtId = divisionAndDistrict.id
        divisionId = divisionAndDistrict.division
    }

    if (subCategory && adCategory) {
        adCategoryName = adCategory.name
        adCategoryId = adCategory.id
        subCategoryName = subCategory.name
        subCategoryId = subCategory.id
    }
    const {profileData} = useSelector(state => state.getProfileSettingReducer)
    
    // <span style={{color:'red'}}>{adError?.title?.map((error)=>(error?.message))}</span>
    const {adUpdateError,loading} = useSelector(state => state.patchAdUpdateReducer) 

    // if (adEditSuccess){
    //     if (adEditSuccess.status === 201){
    //         document.getElementById("adStoreForm").reset();
    //         if (firstImagePreview != false){
    //             setFirstImagePreview(false)
    //         }
    //         if (firstImageCheck != false){
    //             setFirstImageCheck('')
    //         }
    //         if (firstImageStore != false){
    //             setFirstImageStore(false)
    //         }
    //         if (secondImagePreview != false){
    //             setSecondImagePreview(false)
    //         }
    //         if (secondImageStore != false){
    //             setSecondImageStore(false)
    //         }
    //         if (thirdImagePreview != false){
    //             setThirdImagePreview(false)
    //         }
    //         if (thirdImageStore != false){
    //             setThirdImageStore(false)
    //         }
    //         if (forthImagePreview != false){
    //             setForthImagePreview(false)
    //         }
    //         if (forthImageStore != false){
    //             setForthImageStore(false)
    //         }
    //         if (fiveImagePreview != false){
    //             setFiveImagePreview(false)
    //         }
    //         if (fiveImageStore != false){
    //             setFiveImageStore(false)
    //         }
    //     }
    // }


    useEffect(() => {
        dispatch(getProfileSettingAction())
    }, []);
  
     
     
    const noConditionCategoryList = [
        "Personal Advertisements", 
        "Education" ,
        "Daily Essential Products", 
        "Real Estate & Property", 
        "PM Food Bank & Restaurants", 
        "Service" , 
        "Tour & Travels" , 
        "Resort, Hotel & Community Centre" , 
        "Rent/To-Let",  
    ] 

    const newConditionCategoryList = [
        "Health & Beauty", 
        "Garments & Clothing", 
        "Fuel, Oil & Gas",   ]


    const noConditionSubCategoryList = [
        "Mobile Phone Services", 
        "Auto Services", 
        "Mobile Internet",
        "Pets", 
        "Farm Animals", 
        "Other Pets & Animals", 
        "Crops, Rice-Potato-Wheat-Corn",   
        "Poultry & Dairy Farm",   
        "Dal-Onion -Garlic-Ginger-Chili",   
        "Fish-Shrimp",   
        "Feed & Seed", 
        "Cattle",    
        "Other Agriculture Goods",
        "Rentals" , 
        "Dokan", 
        "Enterprise", 
        "Traders", 
        "Store", 
        "Others",
    ] 

    const reConditionSubCategoryList = [
        "Cars",
        "Motorbikes & Scooters",
        "Trucks Three Wheelers",
        "Vans",
        "Buses" , ]
 

    const subCategories = [
        {
            "name": "bd5dea8f-9c0b-4944-8c9c-a7d5cc53915b",
            "un-common-field": [
                {
                    "Type select LName Brand Name": [
                        "Apple",
                        "Samsung",
                        "Nokia",
                        "Sony", 
                        "OPPO",
                        "Huawei",
                        "Xiaomi",
                        "Vivo",
                        "Lenovo",
                        "Motorola",
                        "OnePlus",
                        "Asus",
                        "Alcatel",
                        "Realme",
                        "Honor", 
                        "Infinix",
                        "HTC",
                        "Gione",
                        "BlackBerry",
                        "Coolpad",
                        "Micromax Informatics ZTE",
                        "Meizu",
                        "LG",
                        "Walton",
                    ],
                    "Type text LName Model Name": '',
                    "Type text LName Configuration / Layout": '',
                    "Type textaria LName Mobile Description": '',
                    "Type radio LName Authenticity": [
                        "Original",
                        "Refurbished",
                    ],
                },
            ],
        },
        {
            "name": "a57dacf5-8a91-4c74-94bd-83cfa41754e0",
            "un-common-field": [
                {
                    "Type select LName Mobile Phone Accessories Type": [
                        "Screen Protector",
                        "Headphone",
                        "Selfie Stick",
                        "Power Bank",
                        "PopSockets",
                        "OtterBox",
                        "Wireless Chargers",
                        "Handset",
                        "Chargers",
                        "Stylus Pen",
                        "Cables",
                        "Bluetooth Earbuds",
                        "Holders & Stands",
                        "Car Chargers",
                        "Bags & Cases",
                        "USB On-The-Go",
                        "VRBoxes",
                        "Mobile Screen",
                        "Enlarger",
                        "iPhone Wallet Case",
                        "Samsung Wallet Case", 
                        "Mobile Screen Enlarger",
                        "Others"
                    ],
                    "Type textaria LName Accessories Description": '',
                },
            ],
        },
        {
            "name": "908cd167-61e6-46b1-afc0-8e68ba237afc",
            "un-common-field": [
                {
                    "Type radio LName SIM Type": [
                        "Pre-paid",
                        "Post-paid",
                    ],
                    "Type radio LName Bandwidth": [
                        "2G",
                        "3G",
                        "4G",
                        "5G",
                    ],
                    "Type textaria LName SIM Card Description": '',
                    "Type select LName Brand / Operator": [
                        "Grameenphone",
                        "Airtel",
                        "Banglalink",
                        "Robi",
                        "Teletalk",
                    ],
                },
            ],
        },
        {
            "name": "f840034f-e44d-48af-af12-283355bd893b",
            "un-common-field": [
                {
                    "Type text LName Service Type": '',
                    "Type textaria LName Service Description": '',
                },
            ], 
        }, 
        {
            "name": "ac583129-ae18-41fa-b7eb-c302a2694426",
            "un-common-field": [
                {
                    "Type text LName Internet Type": '',
                    "Type textaria LName Internet Description": '',
                },
            ],
        },
        {
            "name": "2618bfea-ca69-4807-8140-f402004d63c4",
            "un-common-field": [
                {
                    "Type radio LName Wearable Technology Type":[
                        "Smart Watches",
                        "Fitness Bands",
                    ],
                    "Type textaria LName Product Description": '',
                },
            ],
        },
        {
            "name": "85affc70-a892-4218-9d45-81a5e6144290",
            "un-common-field": [
                {
                    "Type select LName Brand Name": [
                        "Acer",
                        "Dell",
                        "Lenovo",
                        "Apple",
                        "Asus",
                        "Alienware",
                        "Intel",
                        "IBM",
                        "HP Desktop",
                        "Cyber PowerPC",
                        "Gateway 2000",
                        "Dell Inspiron",
                        "Dell Vostro",
                        "Others",
                    ],
                    "Type text LName Model Name": '',
                    "Type text LName Configuration/ Layout": '',
                    "Type textaria LName Desktop Description": '',
                },
            ],
        },

        //start 
        {
            "name": "49264def-a5b5-4ccf-942b-ff40f3c176fc",
            "un-common-field": [
                {
                    "Type select LName Brand Name": [
                        "Lenovo",
                        "Dell", 
                        "Apple",
                        "Acer",
                        "Asus",
                        "Microsoft",
                        "MSI",
                        "Samsung",
                        "Razer",
                        "Toshiba",
                        "Samsung Group",
                        "Hewlett –Packard",
                        "Alienware",
                        "ThinkPad",
                        "Huawei",
                        "MacBook",
                        "Apple MacBook Pro",
                        "Sony",
                        "VAIO",
                        "Fujitsu",
                        "GIGABYTE",
                        "Apple MacBook Air",
                        "Panasonic",
                        "Others",
                    ],
                    "Type text LName Model Name": '',
                    "Type text LName Configuration/ Layout": '',
                    "Type textaria LName Laptop Description": '',
                },
            ],
        },
        {
            "name": "b4412d40-9f3f-4597-a158-c54a05807b48",
            "un-common-field": [
                {
                    "Type select LName Laptop & computer accessories type": [
                        "Graphics Card",
                        "Motherboard",
                        "Hard Drive",
                        "SSD Card",
                        "Pen Drive",
                        "Software",
                        "Mouse",
                        "Processor",
                        "Power Supply",
                        "RAM",
                        "IPS",
                        "UPS",
                        "Laptop Battery",
                        "Keyboard",
                        "Modem",
                        "Router",
                        "Printer",
                        "Scanner",
                        "Monitor",
                        "Tablet Battery",
                        "Others" 
                    ], 
                    "Type textaria LName Description": '',
                },
            ],
        }, 
        {
            "name": "6972f573-1656-4187-8efd-2d8b62ea356f",
            "un-common-field": [
                {   
                     
                    "Type select LName Item Type": [ 
                        "Samsung",
                        "Sony",
                        "TCL",
                        "Panasonic",
                        "Hisense",
                        "Toshiba",
                        "VIZIO",
                        "Philips",
                        "Haier",
                        "Xiaomi",
                        "Sharp Corporation",
                        "Onida Electronics",
                        "OnePlus",
                        "Huawei",
                        "Sanyo",
                        "LG Electronics",
                        "THOMSON",
                        "JVC",
                        "RCA",
                        "Insignia",
                        "Sansui",
                        "Intex",
                        "Kodak",
                        "OPPO",
                        "Walton",
                        "Others",  
                    ],  
                    "Type text LName Brand Name": '',
                    "Type text LName Model Name": '',
                    "Type text LName Configuration/ Layout": '',
                    "Type textaria LName TV Description": '',
                },
            ],
        },
        {
            "name": "d07a2276-fc42-4b10-9128-450a4b7b8b84", 
            "Type text LName Item Type": '',
            "un-common-field": [
                {     
                    "Type select LName Brand Name": [
                        "JBL", 
                        "Bose", 
                        "KEF", 
                        "Dynaudio", 
                        "Bowers & Wilkins", 
                        "Harman Kardon", 
                        "Definitive Technology", 
                        "Klipsch", 
                        "Cerwin –Vega", 
                        "Altec Lansing", 
                        "Arcam", 
                        "Denon", 
                        "Audio – Technica", 
                        "Alesis", 
                        "Tannoy", 
                        "Acoustic Research", 
                        "D&D Audiotechnic", 
                        "AMX", 
                        "ADAM Audio", 
                        "Accurate Audio", 
                        "Sweet Audio", 
                        "Micro Audio", 
                        "Banging Audio", 
                        "Sound Sense", 
                        "Others",   
                    ], 
                    "Type text LName Model Name": '',
                    "Type text LName Configuration/ Layout": '',
                    "Type textaria LName Product Description": '',
                },
            ],
        }, 
        {
            "name": "b9eb57cb-d782-4229-b455-fa4d2d8d8479", 
            "Type text LName Item Type": '',
            "un-common-field": [
                {
                    "Type select LName Brand Name": [
                        "Sony",    
                        "Canon",    
                        "Panasonic",    
                        "Nikon",    
                        "Fujifilm",    
                        "Olympus",    
                        "Leica",    
                        "Pentax",    
                        "Hasselblad",    
                        "Kodak",    
                        "JVC",    
                        "Polaroid Corporation",    
                        "Canon EOS R5",    
                        "Canon XA50",    
                        "Canon XA30",    
                        "Vivitar",    
                        "Canon XC10",    
                        "Canon Camcorder",    
                        "Blackmagic Design",    
                        "Rollei",    
                        "Canon EOS R3",    
                        "Canon VIXIA",    
                        "Sony Handycam",    
                        "Others",    
                    ], 
                    "Type text LName Model Name": '',
                    "Type text LName Configuration/ Layout": '',
                    "Type textaria LName Product Description": '',
                },
            ],
        }, 
        {
            "name": "0f024e53-23eb-4898-9629-62da5ece99b1",  
            "un-common-field": [
                {
                    "Type select LName Item Type": [
                        "TV Boxes & Card",    
                        "Projector",      
                        "Projector",      
                        "Video Player",      
                        "Others",      
                    ], 
                    "Type text LName Brand Name": '',
                    "Type text LName Model Name": '',
                    "Type text LName Configuration/ Layout": '',
                    "Type textaria LName Accessories Description": '',
                },
            ],
        },
        { 
            "name": "ceb64e64-0130-4101-a6e0-0f247e18b83e",
            "un-common-field": [
                {
                    "Type radio LName Device Type": [
                        "Tablets",
                        "Accessories",
                    ],
                    "Type select LName Brand Name": [
                        "Samsung",    
                        "Huawei",      
                        "Microsoft",      
                        "Asus",      
                        "Toshiba",      
                        "Karbonn",      
                        "Motorola",      
                        "HTC",      
                        "Teclast",      
                        "Others",         
                    ], 
                    "Type text LName Model Name": '',
                    "Type text LName Configuration/ Layout": '',
                    "Type textaria LName Product Description": '',
                },
            ],
        },
        { 
            "name": "7dddf950-b98c-40f1-8633-df8a791c5472",
            "un-common-field": [
                {
                    "Type radio LName Device Type": [
                        "Virtual Video Games",
                        "Virtual Video Game Consoles",
                        "Virtual Video Games Accessories",
                    ],
                    "Type textaria LName Description": '',
                },
            ],
        },
        {
            "name": "8bebf730-6c5d-4bff-abb7-13ef02849892",
            "un-common-field": [
                {
                    "Type select LName Brand Name": [ 
                        "Xerox",
                        "Canon",
                        "Ricoh", 
                        "Sharp Corporation", 
                        "Konica Minolta", 
                        "Kyocera", 
                        "Toshiba", 
                        "Lexmark", 
                        "Olivetti", 
                        "Xerox 914", 
                        "Others",  
                    ], 
                    "Type text LName Model Name": '',
                    "Type text LName Configuration/ Layout": '',
                    "Type textaria LName Photocopiers Description": '',
                },
            ],
        },  
        {
            "name": "4c0cd153-d45a-4f32-b599-3470942e49d3",
            "un-common-field": [
                {
                    "Type select LName Brand Name": [ 
                        "Anadea", 
                        "Atlas Copco", 
                        "Cummins", 
                        "Generac", 
                        "Champion", 
                        "DuroMax", 
                        "Briggs & Stratton", 
                        "Others",  
                    ], 
                    "Type text LName Model Name": '', 
                    "Type text LName Configuration/ Layout": '', 
                    "Type textaria LName Generator Description": '',
                },
            ],
        },
        {
            "name": "8d2541cc-4ca4-4fbf-b341-e16094253ee1",
            "un-common-field": [
                {
                    "Type select LName Item Type ": [ 
                        "IPS", 
                        "Battery", 
                    ],  
                    "Type select LName Brand Name": [ 
                        "Grameen IPS", 
                        "Smarten IPS -500W", 
                        "Luminous IPS", 
                        "Janani IPS", 
                        "Others", 
                        "Duracell", 
                        "Energizer", 
                        "Acdelco", 
                        "Rayovac", 
                        "Eveready Battery Company", 
                        "Byd", 
                        "Sanyo", 
                        "Batteries Plus", 
                        "City Battery", 
                        "Revolution Batteries", 
                        "Batteries 123", 
                        "Batteries Unlimited", 
                        "National Battery", 
                        "Powermetz Battery", 
                        "Propex Battery", 
                        "Smithex", 
                        "Zeddex Battery", 
                        "Ultralife Batteries, Inc", 
                        "Nippo Batteries", 
                        "Others"
                    ],   
                    "Type text LName Model Name": '', 
                    "Type textaria LName Product Description": '',
                },
            ],
        }, 
        {
            "name": "8a71f5a9-1913-487e-b42a-528fe8210f7b",
            "un-common-field": [
                {    
                    "Type text LName Item Type": '', 
                    "Type textaria LName Product Description": '',
                },
            ],
        },
        {
            "name": "725d0371-44ad-4333-b5a7-1b317f6571ad",
            "un-common-field": [
                {    
                    "Type text LName Item Type": '',  
                    "Type select LName Brand Name": [
                        "Vivint", 
                        "Frontpoint", 
                        "SimpliSafe", 
                        "Cove", 
                        "ADT", 
                        "Abode", 
                        "Ring Alarm", 
                        "Blue by ADT", 
                        "Wyze", 
                        "Brinks", 
                        "Ring"
                    ],
                    "Type text LName Model Name": '', 
                    "Type textaria LName Product Description": '',
                },
            ],
        },
        {
            "name": "d643a89e-9c03-4af3-9ec1-90974714470b",
            "un-common-field": [
                {   
                    "Type radio LName Item Type": [
                        "Printer", 
                        "Scanner", 
                    ],
                    "Type select LName Brand Name": [ 
                        "Brother", 
                        "Epson", 
                        "Canon", 
                        "Lexmark", 
                        "Xerox", 
                        "Ricoh", 
                        "Samsung", 
                        "Konica Minolta", 
                        "Panasonic", 
                        "Eastman Kodak", 
                        "Brother Industries", 
                        "Dell", 
                        "Toshiba", 
                        "HP Printer", 
                        "HP Printers", 
                        "Honey Well", 
                        "Zebra", 
                        "Visioneer", 
                        "Plustek", 
                        "Xerox", 
                        "Lexmark", 
                        "Ricoh", 
                        "Tao Tronics", 
                        "iCODIS", 
                        "Panasonic Corporation", 
                        "UMAX", 
                        "Canon Inc", 
                        "Keyscan", 
                        "Microtek", 
                        "Others" 
                    ], 
                    "Type text LName Model Name": '', 
                    "Type textaria LName Product Description": '',
                },
            ],
        },
        {
            "name": "a58194fa-4a15-489b-9cc8-a65ca54f5981",
            "un-common-field": [
                { 
                    "Type text LName Item Type": '', 
                    "Type textaria LName Product Description": '',
                },
            ],
        },
        {
            "name": "900f3141-491a-4492-a877-2b80697b65e1",
            "un-common-field": [
                {
                    "Type select LName Item Type": [ 
                        "Select your item type",
                        "AC",
                        "Generator",
                        "Solar System",
                        "Cooler",
                        "Lighting",
                        "Fan",
                        "Air Cooler",
                        "Freeze",
                        "Micro Oven",
                        "Toaster",
                        "Rice Cooker",
                        "Heater",
                        "IPS",
                        "Others", 
                    ], 
                    "Type select LName Brand Name": [
                        "Daikin",
                        "Voltas",
                        "Carrier Global",
                        "Hitachi",
                        "Blue Star",
                        "Samsung",
                        "Whirlpool",
                        "Haier",
                        "O General",
                        "Lloyd",
                        "Godrej",
                        "Mitsubishi",
                        "Trane",
                        "Videocon",
                        "Midea Group",
                        "Rheem",
                        "Mitsubishi Electric",
                        "Gree Electric",
                        "Goodman",
                        "Heil",
                        "Mitashi",
                        "Kelvinator",
                        "Bosch",
                        "Heil Air Conditioners",
                        "Havells",
                        "Usha",
                        "Orient Electric",
                        "Bajaj",
                        "Khaitan",
                        "Atomberg",
                        "Craftmade",
                        "SUPERFAN",
                        "Activa",
                        "Finolex Cables",
                        "Others",
                    ],
                    "Type text LName Model Name": '', 
                    "Type text LName Configuration/ Layout": '', 
                    "Type textaria LName Product Description": '',
                },
            ],
        },
        {
            "name": "2f85a1d0-9a0b-4c84-b301-12a784b8b38b",
            "un-common-field": [
                {
                    "Type select LName Item Type": [ 
                        "Blender",
                        "Juicer",
                        "Grinder",
                        "Ovens",
                        "Kitchen Hood",
                        "Maker",
                        "Cleaning Appliance",
                    ],  
                    "Type text LName Brand Name": '', 
                    "Type text LName Model Name": '', 
                    "Type textaria LName Product Description": '',
                },
            ],
        },
        {
            "name": "38da7e85-a977-4db6-b4a4-56df09c80114",
            "un-common-field": [
                {
                    "Type select LName Bedroom Furniture": [ 
                        "Bed",
                        "Mattress",
                        "Wardrobes",
                        "Shelves",
                        "Bedside Table",
                        "Bedside Lamp",
                        "Chair",
                        "Dressing Table",
                        "Almirah",
                        "Locker",
                        "Others",
                    ],  
                    "Type textaria LName Furniture Description": '',
                },
            ],
        },
        {
            "name": "be61b22d-04a5-495a-b351-f8d8e1a751d0",
            "un-common-field": [
                {
                    "Type select LName Living Room Furniture Type": [ 
                        "Sofas",
                        "Sectionals",
                        "Sleeper Sofas",
                        "Accent Chair",
                        "Divan",
                        "Showcases",
                        "Loveseats",
                        "Shoe Rack",
                        "Chaises",
                        "Center Table",
                        "Side Table",
                        "Dining Table",
                        "Swing",
                        "Chairs",
                        "Bookcase",
                        "Recliners",
                        "Shelves",
                        "Table",
                        "Chair",
                        "Others", 
                    ],
                    "Type textaria LName Furniture Description": '',
                },
            ],
        },
        {
            "name": "33f54911-68cc-46ff-a20c-811439f9be64",
            "un-common-field": [
                {
                    "Type select LName Furniture Type": [ 
                        "Kitchen Cabinet",
                        "Stool",
                        "Dining Table",
                        "Chairs",
                        "Bar Stool",
                        "Coffee Table",
                        "Dining Benches",
                        "Table",
                        "Drop –Leaf Table",
                        "Wine Rack",
                        "Gateleg Table",
                        "Round Dining Table",
                        "Folding Dining Table",
                        "Wooden Dining Table",
                        "Refectory Table",
                        "Rocking Chair",
                        "Rack ",
                        "Trolley",
                        "Sideboard",
                        "Bench",
                        "Kettle",
                        "Kitchen Island",
                        "Others",
                    ],  
                    "Type textaria LName Furniture Description": '',
                },
            ],
        }, 
        {
            "name": "0dc633db-fdb4-4237-a99b-07a44bcdc3d2",
            "un-common-field": [
                {
                    "Type select LName Furniture Type": [ 
                        "Painting",
                        "Home Decor",
                        "Mattresses",
                        "Antique",
                        "Carpet",
                        "Handicraft",
                        "Bedding",
                        "Chenille",
                        "Chiffon",
                        "Velvet",
                        "Muslin",
                        "Crepe ",
                        "Batik",
                        "Brocade",
                        "Georgette",
                        "Cover", 
                        "Curtain",
                        "Organza",
                        "Damask",
                        "Calico",
                        "Cushions",
                        "Chintz",
                        "Gingham",
                        "Buckram",
                        "Bunting",
                        "Burlap",
                        "Cheesecloth",
                        "Organdy",
                        "Cotton",
                        "Broadcloth",
                        "Flannel",
                        "Poplin",
                        "Velveteen ",
                        "Others", 
                    ],   
                    "Type textaria LName Furniture Description": '',
                },
            ],
        },
         {
            "name": "b24ca305-cf97-47b4-a767-d9927e4212fa",
            "un-common-field": [
                {
                    "Type select LName Furniture Type": [ 
                        "Desk",
                        "Display Rack",
                        "Chair",
                        "Filing Cabinet",
                        "Conference Table",
                        "Rocking Chair",
                        "Clock",
                        "Picture Frame",
                        "Parlor Furniture",
                        "Work Station",
                        "Reception Table",
                        "Computer Table",
                        "Book Shelves",
                        "Shoes Rack",
                        "Tea & Coffee Table",
                        "Dressers",
                        "Cupboards",
                        "Racks",
                        "Others",
                    ],   
                    "Type textaria LName Furniture Description": '',
                },
            ],
        }, 
        {
            "name": "1a1e2c33-a64e-41ba-9de8-3362ac90e648",
            "un-common-field": [
                {
                    "Type select LName Item Type": [ 
                        "Vacuum Cleaner",
                        "Toilet",
                        "Toaster",
                        "Waste container",
                        "Kitchen & Dining",
                        "Refrigerator",
                        "Mop",
                        "Tools & machineries",
                        "Toothpaste",
                        "Bin Bag",
                        "Air Conditioning",
                        "Microwaves",
                        "Towel",
                        "Hair Dryer",
                        "Broom",
                        "Bookcase",
                        "Paper Towel",
                        "Knives",
                        "Brush",
                        "Bathtub",
                        "Sewing Machines",
                        "Dyer",
                        "Sponge",
                        "Ladle",
                        "Vase",
                        "Alarm Clock",
                        "Laundry Detergent",
                        "Others",
                    ],  
                    "Type textaria LName Furniture Description": '',
                },
            ],
        },
        {
            "name": "061efd6f-17b1-4915-a907-f8e5ce1186ab",
            "un-common-field": [
                {
                    "Type select LName Furniture Type": [ 
                        "Chair",
                        "Bunk Bed",
                        "Kid Reading Table",
                        "Baby Cot",
                        "Bassinet",
                        "Kid Bed",
                        "Rocking Chair",
                        "Booster Seat",
                        "Changing Table",
                        "Toddler Bed",
                        "Swing",
                        "High Chair",
                        "Playpen",
                        "Others",
                    ],  
                    "Type textaria LName Furniture Description": '',
                },
            ],
        },
        {
            "name": "96b561b9-7ceb-452c-a6a2-3de16eacfaee",
            "un-common-field": [
                {
                    "Type select LName Freeze Type": [ 
                        "Side by Side",
                        "French Door",
                        "Bottom Freezer",
                        "Top Freezer",
                        "Counter Depth",
                        "Normal Freeze",
                        "Deep Freeze",
                        "Others"
                    ], 
                    "Type select LName Brand Name": [
                        "LG",
                        "Whirlpool",
                        "Walton",
                        "Singer",
                        "Samsung",
                        "Haier",
                        "Bosch",
                        "Electrolux",
                        "Videocon",
                        "Minister",
                        "Sharp",
                        "Panasonic",
                        "Siemens",
                        "Others"
                    ],
                    "Type text LName Configuration/ Layout": '', 
                    "Type text LName Model Name": '', 
                    "Type textaria LName Freeze Description": ''
                },
            ],
        },
        {
            "name": "7dd42baa-ff43-46df-9bd2-19933260a634",
            "un-common-field": [
                { 
                    "Type radio LName Item Type": [
                        "Fan", 
                        "Washing Machine"
                    ], 
                    "Type text LName Brand Name": '', 
                    "Type text LName Configuration/ Layout": '', 
                    "Type textaria LName Model Name": ''
                },
            ],
        },
        {
            "name": "5591f1a6-eab2-4037-9536-71b2c397d028",
            "un-common-field": [
                {
                    "Type select LName Item Type": [ 
                        "Kettle",
                        "Toaster",
                        "Microwaves",
                        "Refrigerator",
                        "Dishwasher",
                        "Pitcher",
                        "Blender",
                        "Others",
                    ], 
                    "Type textaria LName Product Description": '',
                },
            ],
        },
        {
            "name": "5e88f1f8-bfc7-4fff-9e0d-c982d9df402e",
            "un-common-field": [
                {  
                    "Type text LName Item Type": '', 
                    "Type textaria LName Product Description": '',
                },
            ],
        }, 
        // 4 Vehicles & Transportation
         
        {
            "name": "ba022c12-764a-496e-b568-d700fe7277da",
            "un-common-field": [
                {
                    "Type select LName Brand": [  
                        "Tata",
                        "Chevrolet",
                        "Toyota",
                        "Akij",
                        "Alpa Romeo",  
                        "Daihatsu",
                        "Proton",
                        "Maruti",
                        "Daewoo",
                        "Changan",
                        "Honda",
                    ], 
                    "Type text LName Year of manufacture": '', 
                    "Type textaria LName Description": '', 
                    "Type select LName Country of origin": [  
                        "India",
                        "China",
                        "Japan",
                        "Bangladesh",
                        "Others Country", 
                    ],   
                    "Type text LName Model Name": '',  
                    "Type text LName Edition/ Stylish": '',  
                    "Type text LName Kilometers Run": '',  
                    "Type text LName Transmission": '',  
                    "Type text LName Registration Year": '',  
                    "Type text LName Fuel Type": '',  
                    "Type text LName Body type": '',  
                    "Type text LName Engine Capacity": '',  
                },
            ],
        },
        {
            "name": "ce416bce-a427-44fa-82e0-879bf64dac2e",
            "un-common-field": [
                {
                    "Type select LName Brand": [ 
                        "Honda",
                        "Kawasaki",
                        "Suzuki",
                        "Yamaha",
                        "Moriwak",
                        "Evoke Motorcycles",  
                        "Jincheng Suzuki",  
                        "Keeway",
                        "Lifan",
                        "Loncin",
                        "Niu Technologies",  
                        "Qianjiang",
                        "Qingqi",
                        "Thumpstar",
                        "Yinxiang Motorcycle",  
                        "Znen",
                        "Zongshen",
                        "Bajaj",
                        "Hero",
                        "Mahindra",
                        "Peugeot",
                        "BSA",
                        "Jawa",
                        "Yezdi",
                        "Royal",
                        "TVS",
                        "Norton",
                        "Daelim",
                        "Hyosung",
                        "KR Motors",  
                    ],  
                    "Type text LName Year of manufacture": '', 
                    "Type textaria LName Description": '', 
                    "Type select LName Country of origin": [  
                        "India",
                        "China",
                        "Japan",
                        "Bangladesh",
                        "Others Country", 
                    ],  
                    "Type text LName Model Name": '',  
                    "Type text LName Edition/ Stylish": '',  
                    "Type text LName Kilometers Run": '',  
                    "Type text LName Transmission": '',  
                    "Type text LName Registration Year": '',  
                    "Type text LName Fuel Type": '',  
                    "Type text LName Body type": '',  
                    "Type text LName Engine Capacity": '',  
                },
            ],
        },
        { 
            "name": "a816af2d-5692-4dc1-8d94-aba448a9f998",
            "un-common-field": [
                {
                    "Type select LName Brand": [  
                        "Adder",
                        "Atlas",
                        "Bianchi",
                        "Camp",
                        "Claud Butler", 
                        "Combat",
                        "Core",
                        "Coyote",
                        "DiamondBack",
                        "Duranta",
                        "Falcon",
                        "Format",
                        "Formula",
                        "Foxter",
                        "Ghost",
                        "Giant",
                        "Haolaixi",
                        "Hero", 
                        "Indigo",
                        "Kaimarte",
                        "Kellys",
                        "Landao",
                        "Laux",
                        "Marine",
                        "MBM",
                        "Merida",
                        "Mustang",
                        "Nekro",
                        "Phoenix",
                        "Python",
                        "Precious",
                        "Prince",
                        "Raleigh",
                        "Riddick",
                        "Rock Machine", 
                        "SafeWay",
                        "Saracen",
                        "Trek",
                        "Trinx",
                        "Twitter",
                        "Unifox",
                        "Upland",
                        "Veloce",
                        "Vertigo",
                        "Viking", 
                    ],
                    "Type text LName Year of manufacture": '', 
                    "Type textaria LName Description": '', 
                    "Type select LName Country of origin": [  
                        "India",
                        "China",
                        "Japan",
                        "Bangladesh",
                        "Others Country", 
                    ],    
                    "Type text LName Item Type": '',  
                },
            ],
        },
         {
            "name": "38a06cd8-f894-46f2-925a-0362e59387a9",
            "un-common-field": [
                {  
                    
                    "Type text LName Year of manufacture": '', 
                    "Type textaria LName Description": '', 
                    "Type select LName Country of origin": [  
                        "India",
                        "China",
                        "Japan",
                        "Bangladesh",
                        "Others Country", 
                    ],
                    "Type text LName Parts & Accessories Type": '',
                },
            ],
        }, 
         {
            "name": "929b7657-95cf-42eb-a7ff-3ab9e3a9f734",
            "un-common-field": [
                {
                    "Type text LName Year of manufacture": '', 
                    "Type textaria LName Description": '', 
                    "Type select LName Country of origin": [  
                        "India",
                        "China",
                        "Japan",
                        "Bangladesh",
                        "Others Country", 
                    ],
                    "Type text LName Rental Type": '',
                },
            ],
        },
         {
            "name": "c5fc35e9-459f-40da-9332-5b98730922fe",
            "un-common-field": [
                {
                    "Type textaria LName Item Type": '',
                    "Type select LName Brand": [ 
                        "Tata",
                        "Isuzu",
                        "Ashok Leyland", 
                        "Eicher",
                        "Foton",
                        "Isuzu",
                        "JAC",
                        "Other Brand", 
                    ],  
                    "Type text LName Year of manufacture": '', 
                    "Type textaria LName Description": '', 
                    "Type select LName Country of origin": [  
                        "India",
                        "China",
                        "Japan",
                        "Bangladesh",
                        "Others Country", 
                    ],
                    "Type text LName Model Name": '', 
                    "Type text LName Edition/ Stylish": '',
                    "Type text LName Kilometers Run": '',
                    "Type text LName Transmission": '',
                    "Type text LName Registration Year": '',
                    "Type text LName Engine Capacity": '',
                },
            ],
        }, 
        {
            "name": "2c755688-5725-4c54-972a-51a88faa56f9",
            "un-common-field": [
                {
                    "Type select LName Item Type": [ 
                        "Heavy Duty",
                        "Tractor" 
                    ], 
                    "Type text LName Year of manufacture": '', 
                    "Type textaria LName Description": '', 
                    "Type select LName Country of origin": [  
                        "India",
                        "China",
                        "Japan",
                        "Bangladesh",
                        "Others Country", 
                    ],
                },
            ],
        },
        {
            "name": "acf33e63-8ccc-4403-b8d8-41f7aae07b8f",
            "un-common-field": [
                {
                    "Type select LName Transport Type": [ 
                        "Sea Boat", 
                        "Speed Boat", 
                        "Trallers",
                        "Ship",
                        "Birdship",
                        "Feri",
                    ], 
                    "Type text LName Year of manufacture": '', 
                    "Type textaria LName Description": '' 
                },
            ],
        },
        {
            "name": "3dcf3258-ccd2-4313-9ba5-d628517bbc5e",
            "un-common-field": [
                {
                    
                    "Type text LName Item Type": '', 
                    "Type select LName Brand": [
                        "Toyota",
                        "Tata",
                        "Mitsubishi",
                        "Emma",
                        "Ford",
                        "JMC",
                        "Daihatsu",
                        "Foton",
                        "Others Brand"
                    ],
                    "Type text LName Year of manufacture": '', 
                    "Type textaria LName Description": '', 
                    "Type select LName Country of origin": [  
                        "India",
                        "China",
                        "Japan",
                        "Bangladesh",
                        "Others Country", 
                    ],
                    "Type text LName Model Name": '', 
                    "Type text LName Edition/ Stylish": '',
                    "Type text LName Kilometers Run": '',
                    "Type text LName Registration Year": '',
                    "Type text LName Engine Capacity": '',
                },
            ],
        }, 
        {
            "name": "2dc21005-d0d0-4e46-a928-553ab3c12417",
            "un-common-field": [
                { 
                    "Type text LName Services Type": '',  
                    "Type textaria LName Description": '',
                },
            ],
        },
        {
            "name": "f0041db4-e50d-4712-89fa-c989f02ea757",
            "un-common-field": [
                {   
                    "Type text LName Item Type": '',
                    "Type select LName Brand": [ 
                        "Nitol TATA", 
                        "Hino",
                        "Isuzu",
                        "Eicher",
                        "MAN",
                        "Mitsubishi",
                        "Nissan",
                        "Toyota",
                        "Scania",
                        "Volvo",
                        "Mercedes Benz", 
                        "Other Brand", 
                    ],
                    "Type text LName Year of manufacture": '', 
                    "Type textaria LName Description": '', 
                    "Type select LName Country of origin": [  
                        "India",
                        "China",
                        "Japan",
                        "Bangladesh",
                        "Others Country", 
                    ],  
                    "Type text LName Model Name": '', 
                    "Type text LName Edition/ Stylish": '',
                    "Type text LName Kilometers Run": '',
                    "Type text LName Registration Year": '',
                    "Type text LName Engine Capacity": '',
                },
            ],
        },     
        {
            "name": "9aa20b83-e421-441e-a48c-64a79641724f",
            "un-common-field": [
                {
                    "Type select LName Item Type": [ 
                        "Concrete Mixer", 
                        "Tower Crane", 
                        "Breaker",
                        "Excavator",
                        "Grader",
                        "Bobcat",
                        "Bulldozer",
                        "Road Roller", 
                        "Backhoe",
                        "Forklift", 
                    ],  
                    "Type textaria LName Description": '',
                },
            ],
        },  

        // 5 Daily Essential Products 
        {
            "name": "fdcc1722-0622-468c-ab18-32616902a054",
            "un-common-field": [
                {
                    "Type select LName Grocery Item Type": [ 
                        "Rice",
                        "Pulse",
                        "Biscuits",
                        "Snacks",
                        "Cold Drinks",
                        "Fruit Juice",
                        "Chocolate",
                        "Bakery & Baking",
                    ], 
                    "Type textaria LName Description": '',
                },
            ],
        },
        {
            "name": "a7ec749e-a357-48f6-940f-5b564de627f1",
            "un-common-field": [
                {
                    "Type select LName Healthcare Type": [ 
                        "Skin Care",
                        "Hair Care",
                        "Mouth Care",
                        "Face Care",
                        "Body Care",
                        "Hand Care",
                        "Other Health Care",
                    ], 
                    "Type textaria LName Description": '',
                },
            ],
        }, 
        {
            "name": "0989847b-3cc0-42cd-a012-46e12409736d",
            "un-common-field": [
                {
                    "Type select LName Item Type": [ 
                        "Guava",
                        "Pineapple",
                        "Watermelon",
                        "Strawberry",
                        "Orange",
                        "Grape",
                        "Apple",
                        "Papaya",
                        "Banana",
                        "Mango",
                        "Jackfruit",
                        "Dates",
                        "Cherry",
                        "Amaranth",
                        "Apple Gourd", 
                        "Ash Gourd", 
                        "Beetroot",
                        "Bitter Gourd",  
                        "Black-eyed pea",
                        "Bottle Gourd", 
                        "Broad Beans", 
                        "Brussels sprout", 
                        "Cabbage",
                        "Carrot",
                        "Cauliflower",
                        "Celery",
                        "Ceylon spinach", 
                        "Chickpea",
                        "Cucumber",
                        "Drumstick",
                        "Brinjal",
                        "Elephant Foot yam", 
                        "French Beans", 
                        "Garbanzo",
                        "Gooseberry",
                        "Indian pea", 
                        "Ivy Gourd", 
                        "Jackfruit",
                        "Kidney bean", 
                        "Lentil",
                        "Lotus root", 
                        "Malabar Spinach", 
                        "Mint",
                        "Moth bean", 
                        "Mustard",
                        "Okra",
                        "Onion",
                        "Pea",
                        "Pigeon pea", 
                        "Pointed Gourd", 
                        "Potato",
                        "Pumpkin",
                        "Radish",
                        "Red Amaranth", 
                        "Red Lentil", 
                        "Ridge Gourd",  
                        "Snake Gourd",  
                        "Spinach",
                        "Spring Onion", 
                        "String Beans", 
                        "Sweet Corn", 
                        "Sweet Potato or Kumara", 
                        "Taro",
                        "Teasle Gourd", 
                        "Tomato",
                        "Turnip",
                        "Turnip greens", 
                        "Water spinach", 
                        "Winter melon", 
                        "Rum",
                    ], 
                    "Type textaria LName Description": '',
                },
            ],
        },
        {
            "name": "5207781e-711a-4924-ae4d-463d019772bf",
            "un-common-field": [
                {
                    "Type select LName Household Item Types": [ 
                        "Laundry Detergent",
                        "Dish Soap",
                        "Glass Cleaner",
                        "Tissues",
                        "Toilet Paper",
                        "Paper Towels",
                        "Napkins",
                        "Baby Wipes",
                        "Disposables Item",
                        "Air Freshener",
                        "Light/Bulbs ",
                        "Pen",
                    ], 
                    "Type textaria LName Description": '',
                },
            ],
        },  
        {
            "name": "25c289df-bec1-4565-830a-9409d1a904b9",
            "un-common-field": [
                {
                    "Type select LName Meat & Seafood Type": [ 
                        "Deshi Fish", 
                        "Beef",
                        "Mutton",
                        "Chicken",
                        "Sea Fish", 
                        "Others",
                    ], 
                    "Type textaria LName Description": '',
                },
            ],
        },
        {
            "name": "5926936a-705d-4e61-83db-138deea6ed1d",
            "un-common-field": [
                {
                    "Type select LName Product Type": [ 
                        "Electronic Repair Tool Kit",
                        "Mobile Repairing Tool Kit",
                        "General Purpose Tool Kit",
                        "Multipurpose Tool Kit",
                        "Champering Tool Kit",
                        "Padlock Shape Tool Kit",
                        "Socket Combination Tool kit",
                        "Screwdriver Set",
                        "Screwdriver Bits",
                        "Commercial Tool Kit",
                        "Hand Tool",
                    ], 
                    "Type textaria LName Description": '',
                },
            ],
        },
        {
            "name": "e4933775-3b6d-4209-b451-f54fbae530fb",
            "un-common-field": [
                {
                    "Type select LName Item Type": [ 
                        "Bread",
                        "Beverage",
                    ], 
                    "Type textaria LName Description": '',
                },
            ],
        },
         {
            "name": "19bbf00e-bce5-4ecd-bb13-18c6bb68ef24",
            "un-common-field": [
                { 
                    "Type textaria LName Description": '',
                },
            ],
        }, 
        // 6 Health & Beauty 
        {
            "name": "b6cdcd11-b9a4-423b-a85f-096407c75a61",
            "un-common-field": [
                {
                    "Type select LName Watches Item Type": [ 
                        "Digital",
                        "Analog",
                        "Chronograph",

                    ], 
                    "Type textaria LName Description": '',
                },
            ],
        },
        {
            "name": "7f47f4b5-a544-4ada-bd83-c639be1356e9",
            "un-common-field": [
                {
                    "Type select LName Item Type": [ 
                        "Makeup",
                        "Lipstick",
                        "Eyeshadow",
                        "Eyeliner",
                        "Nail Polish",
                        "Night Cream",
                        "Body Spray",
                        "Face Wash",
                    ], 
                    "Type textaria LName Description": '',
                },
            ],
        },
        {
            "name": "f0b0025b-fb09-4c2c-a4de-d46b7015e14d",
            "un-common-field": [
                {
                    "Type select LName Jewelry Type": [ 
                        "Necklace",
                        "Gold Chain",
                        "Ear Ring",
                        "Bracelet", 
                        "Finger Ring (Gold)",
                        "Finger Ring (Diamond)",
                        "Nose Pin (Gold)",
                        "Nose Pin (Diamond)", 
                    ], 
                    "Type textaria LName Description": '',
                },
            ],
        },
        {
            "name": "d1c6a8bb-0022-4d19-af41-51f63dfcf971",
            "un-common-field": [
                {
                    "Type select LName Item Type": [ 
                        "Vanity Bag",
                        "Travel Bag",
                        "School Bag",
                        "Kids Bag",
                        "Money Bag",
                        "Luggage",
                        "Trolley Bag",
                        "Rider Backpack",
                        "Small Ladies Purse",
                        "Laptop Bag",
                    ], 
                    "Type textaria LName Description": '',
                },
            ],
        },
        {
            "name": "794212fa-dd66-4eff-971e-ada72e558073",
            "un-common-field": [
                {
                    "Type select LName Optical Item Type": [ 
                        "Mens Optical Frame",
                        "Ladies Optical Frame",
                        "Optical Lens",
                        "Optical Box",
                        "Sunglass",
                    ], 
                    "Type textaria LName Description": '',
                },
            ],
        }, 
         {
            "name": "3a736d1a-34b6-4f38-84e1-75d9ed3ac037",
            "un-common-field": [
                {
                    "Type select LName Fashion Accessories Type": [ 
                        "Tie",
                        "Bow Tie",
                        "Belt",
                        "Cap",
                        "Hat",
                        "Hair Band",
                        "Earmuffs",
                        "Scarf",
                        "Hairpin",
                        "Mittens",
                        "Gloves",
                    ], 
                    "Type textaria LName Description": '',
                },
            ],
        }, 
        {
            "name": "823028d9-e39f-4c3b-8707-1db282195810",
            "un-common-field": [
                { 
                    "Type textaria LName Description": '',
                },
            ],
        },
        {
            "name": "c025cd2b-428a-49ba-9fa1-33716df1abac",
            "un-common-field": [
                { 
                    "Type textaria LName Description": '',
                },
            ],
        },
        {
            "name": "53dd3de0-912d-4a94-9427-fc18887e3d0d",
            "un-common-field": [
                { 
                    "Type textaria LName Description": '',
                },
            ],
        },
        {
            "name": "d07bdf35-37d9-409c-8ae2-45dd15955f7a",
            "un-common-field": [
                {
                    "Type select LName Item Type": [ 
                        "Herbal Cosmetics",
                        "Herbal Food Supplements",
                        "Herbal Tea",
                        "Herbal Medicine",
                    ], 
                    "Type textaria LName Description": '',
                },
            ],
        },
        {
            "name": "6d6a1886-f608-44a1-8f2a-0344b0130bcd",
            "un-common-field": [
                {
                    "Type select LName Perfume Type": [ 
                        "Fragrances",
                        "Body Spray",
                        "Deodorant",
                        "Ator",
                        "Agar Bati",
                        "Perfumes",
                        "Air Freshener",
                    ], 
                    "Type textaria LName Description": '',
                },
            ],
        },
        {
            "name": "006e8844-5f37-4130-8fc8-5f01eb95f1c7",
            "un-common-field": [
                {  
                    "Type textaria LName Description": '',
                },
            ],
        }, 

        // 7 Garments & Clothings 
        {
            "name": "8a197ac8-6c86-47f4-b1d0-8be4f8bc2f29",
            "un-common-field": [
                {
                    "Type select LName Women’s Wear Item Type": [ 
                        "Sarees",
                        "Shalwar",
                        "Kameez & Kurtis",
                        "Unstitched Fabric", 
                        "Hijab & Abaya", 
                        "Women’s Tops & T-shirt", 
                        "Gown",
                        "Pants",
                        "Skirt",
                        "Swimwear",
                        "Bra",
                        "Briefs",
                        "Sleepwear",
                        "Shape wear",
                        "Women’s Sweater & Cardigans", 
                        "Women’s Jacket", 
                        "Sandal",
                        "Formal Shoes", 
                        "Flip Flops", 
                    ], 
                    "Type textaria LName Description": '',
                },
            ],
        },  
        {
            "name": "f373e14b-e201-4238-b37b-590187cb2358",
            "un-common-field": [
                {
                    "Type select LName Men’s Wear Item Type": [ 
                        "Shirt",
                        "Pants",
                        "T-Shirt",
                        "Jeans Pant", 
                        "Polo Shirt", 
                        "Panjabi and Sherwani", 
                        "Suits and Blazers", 
                        "Jacket",
                        "Hoodies",
                        "Rain Coats and Trenches", 
                        "Sweater",
                        "Longi and Fotua", 
                        "Sandal",
                        "Formal Shoes", 
                        "Flip Flops", 
                        "Caps and Hat", 
                        "Gloves",
                        "Underwear",
                        "Others",
                    ], 
                    "Type textaria LName Description": '',
                },
            ],
        }, 
        {
            "name": "5191f438-0291-4a51-a89d-1c185dd8e0bd",
            "un-common-field": [
                {
                    "Type select LName Item Of Baby Boys Fashion": [ 
                        "Pants",
                        "Shirt",
                        "T-Shirt",
                        "Panjabi",
                        "Leans Pants", 
                        "Sweater",
                        "Jacket", 
                        "Shoes",
                        "Blazers",
                        "Fotua",
                        "Others", 
                    ], 
                    "Type textaria LName Description": '',
                },
            ],
        }, 
        {
            "name": "823c54fa-57e0-4dc2-b0ac-af67eadeb62a",
            "un-common-field": [
                {  
                    "Type textaria LName Description": '',
                },
            ],
        }, 
        {
            "name": "cf26aac0-232d-4897-827f-34c79f0cee7f",
            "un-common-field": [
                {
                    "Type select LName Item Type": [ 
                        "Men Shoes",
                        "Women’s Shoes, Sandals and Heel",
                        "Baby Boys Shoes & Sandals",
                        "Flip Flops",
                        "Other Shoes", 
                    ], 
                    "Type textaria LName Description": '',
                },
            ],
        },
        {
            "name": "1aef788d-4b1c-4a26-9f67-beb58474d384",
            "un-common-field": [
                {
                    "Type select LName Leather Product Type": [  
                        "Belt",
                        "Money Bag",
                        "Leather Jacket",
                        "Ladies Leather Bag",
                        "Office Leather bag",
                        "School Bag",
                        "Others", 
                    ], 
                    "Type textaria LName Description": '',
                },
            ],
        },  
        // 8 Hobbies, Sports & Babies

        {
            "name": "0507fb32-ee3f-4ba4-aac5-baaa21118f37",
            "un-common-field": [
                {
                    "Type select LName Musical Instrument Type": [  
                        "Accordion",
                        "Acoustic Guitar",
                        "Bagpipes",
                        "Banjo",
                        "Bass Guitar",
                        "Bongo Drums",
                        "Bugle",
                        "Cello",
                        "Clarinet",
                        "Cymbals",
                        "Drums",
                        "Electric Guitar",
                        "Flute",
                        "French horn",
                        "Harmonica",
                        "Harp",
                        "Keyboard",
                        "Maracas",
                        "Organ",
                        "Pan flute (pan pipes)",
                        "Piano",
                        "Recorder",
                        "Saxophone",
                        "Sitar",
                        "Tambourine",
                        "Triangle",
                        "Trombone",
                        "Trumpet",
                        "Tuba", 
                        "Ukulele",
                        "Violin",
                        "Xylophone",
                        "Bassoon",
                        "Castanets",
                        "Didgeridoo",
                        "Double Bass",
                        "Gong",
                        "Harpsichord",
                        "Lute",
                        "Mandolin", 
                        "Oboe",
                        "Piccolo",
                        "Viola",
                    ], 
                    "Type textaria LName Description": '',
                },
            ],
        },
        {
            "name": "5e39da57-9655-4482-81e7-227e38c25036",
            "un-common-field": [
                {  
                    "Type textaria LName Description": '',
                },
            ],
        },
        {
            "name": "0751c764-fb66-46c8-96e3-13aa40228431",
            "un-common-field": [
                {
                    "Type select LName Sports Item Type": [  
                        "Bellitron",
                        "Rower",
                        "VITL",
                        "Slidez",
                        "Dumbbells",
                        "Hypervolt Go",
                        "Battle Rope",
                        "Kettle Gryp",
                        "Sandbags",
                        "Power Tower",
                        "Bow",
                        "Pro 50 Adjustable Dumbbells",
                        "10 to 40 Lb Adjustable Kettlebell",
                        "Adjustable Dumbbell Set",
                        "3-in-1 Soft Plyo Boxes",
                        "The Reversible (Un) Mat",
                        "Suspension Training Kit",
                        "AD Pro Airdyne Bike",
                        "Soft Kettlebell with Handle",
                        "XD Kevlar Weight Vest",
                        "Ab Wheel Roller",
                        "Fan Bike",
                        "Crossrope",
                        "Black Concept 2 RowErg Rower",
                        "SelectTech 4.1S Stowable Bench",
                        "Adjustable Bench",
                        "Primal Kettlebells",
                        "Wood Gymnastics Rings",
                        "Weight Training Slam Ball",
                        "Bluetooth Rower Rowing Machine",
                        "Runfast Pro Weighted Vest",
                        "Platform",
                        "Flat Utility Bench",
                        "Performance Foam Roller",
                        "Smart Spin Bike",
                        "Skipping Rope",
                        "VeloCore Bike",
                        "Indoor Cycling Exercise Bike",
                        "Multi-Function Power Tower8",
                        "10XLT Super Max Power Cage",
                        "Braided Xertube",
                        "Adjustable Dumbbells",
                        "FIT 55in Trampoline Hexagon",
                        "Fight Camp",
                        "Heavy Bag",
                        "Lab Series Exercise and Fitness Medicine Balls",
                        "Cerakote Cast Iron Kettlebell (in Pounds)",
                        "Interlocking Gym Floor Tiles",
                        "Smart Treadmill ",
                        "Stationary Bike",
                        "Multi-Grip Pull Up Bar",
                        "M3 Max Trainer",
                        "PT-R Weight Kit 50LB",
                        "Resistance Bands",
                        "Bluetooth Cardio Stair Stepper",
                        "Pull Up Bands",
                        "Recovery System ",
                        "Mirror",
                        "Wave Duo",
                    ], 
                    "Type textaria LName Description": '',
                },
            ],
        },
        {
            "name": "3573b43c-4316-4c5e-b390-3ff7ce2dcb09",
            "un-common-field": [
                {
                    "Type select LName Sports Item Type": [  
                        "Crickets Bats",
                        "Volleyballs",
                        "Footballs",
                        "Cycle",
                        "Basketballs",
                        "Tennis Balls",
                        "Boxing Gloves",
                        "Hockey Sticks",
                        "Badminton Racquet",
                        "Others",
                        "Football Helmet",
                        "Jock Strap",
                        "Mouth Guards",
                        "Shin Pads",
                        "Ski suits",
                        "Elbow Pads",
                        "Shoulder Pads",
                        "Bicycle Helmet",
                    ], 
                    "Type textaria LName Description": '',
                },
            ],
        },
        {
            "name": "082f3aea-ddbc-4a29-a385-f37318058089",
            "un-common-field": [
                {   
                    "Type textaria LName Description": '',
                },
            ],
        },
        {
            "name": "c75e0e98-3101-4fc1-9398-d839aa31778a",
            "un-common-field": [
                {   
                    "Type textaria LName Description": '',
                },
            ],
        },
        {
            "name": "53027c39-7b4c-4c72-af2d-f15520f61ed1",
            "un-common-field": [
                {
                    "Type select LName Item Type": [   
                        "Jute Bags",
                        "Nakshi Katha",
                        "Hand Made Bed Sheet",
                        "Hand Made Babies Troyes",
                        "Handicrafts Decoratable Products",
                        "Leather",
                        "Pottery",
                        "Woodwork",
                        "Pashmina Shawls",
                        "Shell",
                        "Brass Handicrafts",
                        "Bamboo Handicrafts",
                        "Phulkaris",
                        "Zardozi",
                        "Sarees And Silk",
                        "Carpet Weaving",
                        "Hand Made Door Hangings",
                        "Metal Craft Items",
                        "Others",
                    ], 
                    "Type textaria LName Description": '',
                },
            ],
        }, 
        // 9 Agriculture & Agro Products
        {
            "name": "084061e9-7f8a-43fd-910e-9d61dd3eb574",
            "un-common-field": [
                {
                    "Type select LName Item Type": [   
                        "Rice",
                        "Potato",
                        "Wheat",
                        "Corn",
                        "Barley",
                        "Green Pea", 
                        "Soyabean",
                        "Mustard",
                    ], 
                    "Type textaria LName Description": '',
                },
            ],
        },
        {
            "name": "25ad070b-0fc7-4bfd-bd39-e735e489ac8a",
            "un-common-field": [
                {
                    "Type select LName Item Type": [   
                        "Tractor",
                        "Combine or Harvester", 
                        "Plows",
                        "Harrows",
                        "Fertilizer Spreaders", 
                        "Seeders",
                        "Balers",
                        "Rippers",
                        "Crop Sprayer", 
                        "Graders",
                    ], 
                    "Type textaria LName Description": '',
                },
            ],
        },
        {
            "name": "420dfc88-0869-4dd5-a7cc-50e409914afe",
            "un-common-field": [
                {
                    "Type select LName Item Type": [   
                        "Egg Incubator",
                        "Poultry Cage",
                        "Poultry Feeder",
                        "Broiler Drinker",
                        "Plastic Fogger",
                        "Poultry Sheds",
                        "Nipple Drinker",
                        "Poultry Exhaust Fan",
                        "Mini Egg Incubator",
                        "Poultry Chick Feeder Plate",
                        "Poultry Vaccinator",
                        "Poultry Bislery Drinker",
                        "Chaff Cutter ",
                        "Fodder Grinder",
                        "Milking Machine",
                    ], 
                    "Type textaria LName Description": '',
                },
            ],
        },
        {
            "name": "6bea0828-3d85-42b8-8d69-07379e267f94",
            "un-common-field": [
                {
                    "Type select LName Item Type": [   
                        "Deshi Lentils", 
                        "Indian Lentils", 
                        "Chickpea (Sola Butt)",
                        "Khesari",
                        "Anchor",
                        "Maskolai",
                        "Deshi Onion",
                        "Indian Onion",
                        "Deshi Garlic",
                        "Indian Garlic",
                        "Deshi Ginger",
                        "Indian Ginger",
                        "Green Chili",
                        "Red Chili",
                    ], 
                    "Type textaria LName Description": '',
                },
            ],
        },
        {
            "name": "492fc402-7533-4655-a0a8-61adb84ffebc",
            "un-common-field": [
                {
                    "Type select LName Item Type": [   
                        "Hilsa Fish",
                        "Tuna Fish",
                        "Salmon Fish",
                        "Carp Fish",
                        "Moon Fish",
                        "Climbing fish",
                        "Lobster", 
                        "Shrimp",
                    ], 
                    "Type textaria LName Description": '',
                },
            ],
        },
        {
            "name": "ed182f4f-4d71-45f9-acec-f8b3af20feca",
            "un-common-field": [
                {
                    "Type select LName Item Type": [   
                        "Broiler Feed",
                        "Layer Feed",
                        "Fish Feed",
                        "Cattle Feed",
                        "Chia Seed",
                        "FlaxSeed",
                        "Rajgira Seed",
                        "Sunflower Seed",
                        "Pumpkin Seed",
                        "Basil Seed",
                        "Hemp Seed",
                        "Pomegranate Seed",
                        "Sesame Seed",
                        "Grape Seed",
                        "Caraway Seed",
                    ], 
                    "Type textaria LName Description": '',
                },
            ],
        },
        {
            "name": "e6f8be5e-9327-4501-be6b-4f4ca1226769",
            "un-common-field": [
                { 
                    "Type textaria LName Description": '',
                },
            ],
        }, 
        {
            "name": "f2ea7b54-2212-4bc9-a3a6-3ae5c025b28e",
            "un-common-field": [
                { 
                    "Type textaria LName Description": '',
                },
            ],
        },  
        // 10 Business & Industry 
        {
            "name": "6b583112-71c6-4f65-9652-fc5ba43218bb",
            "un-common-field": [
                {
                    "Type select LName Item Type": [   
                        "X-Ray Machine",
                        "City Scan Machine",
                        "Colonoscopy Machine",
                        "O.T Materials",
                        "Oxygen Cylinder",
                        "Wheelchair",
                        "Stretcher",
                        "Stethoscope",
                        "Surgery Knife",
                        "Crutches ",
                        "Test Tube",
                        "Lab Beaker",
                        "Bandage Scissors",
                        "Microscope",
                        "Surgical  Mask",
                        "Surgical Gloves",
                        "Thermometer",
                        "Blood Pressure Kit",
                    ], 
                    "Type textaria LName Description": '',
                },
            ],
        },
        {
            "name": "054b3507-dd1d-4881-b5ed-db3c62189db7",
            "un-common-field": [
                { 
                    "Type textaria LName Description": '',
                },
            ],
        },
        {
            "name": "ed1dd0e7-62a8-4ef7-90ab-102f14044cb8",
            "un-common-field": [
                { 
                    "Type textaria LName Description": '',
                },
            ],
        },
        {
            "name": "817abc6e-873d-453d-a41a-047f76350ae6",
            "un-common-field": [
                { 
                    "Type textaria LName Description": '',
                },
            ],
        },
        {
            "name": "77b66052-01e0-4f75-97ba-c8c110412319",
            "un-common-field": [
                { 
                    "Type textaria LName Description": '',
                },
            ],
        }, 
        {
            "name": "618864f1-d39b-4455-98da-47b7b12839b9",
            "un-common-field": [
                { 
                    "Type textaria LName Description": '',
                },
            ],
        },  
        {
            "name": "e3a8de98-0319-469d-97fc-34bab215bdf1",
            "un-common-field": [
                { 
                    "Type select LName Item Type": [   
                        "Jute Bag",
                        "Jute Carpet",
                        "Jute Handicraft",
                        "Baby Plastic Toys",
                        "Household Plastic Products",
                        "Latex house paint",
                        "Cooking spatulas",
                        "Carpet pads",
                        "Shower mats",
                        "Dishwashing gloves",
                        "Jar seals",
                        "Floor mats",
                        "Rubberized fabrics", 
                    ], 
                    "Type textaria LName Description": '',
                },
            ],
        }, 
        {
            "name": "3aef6643-589b-47e3-900e-c1a383986314",
            "un-common-field": [
                { 
                    "Type textaria LName Description": '',
                },
            ],
        },          
        
 
        // 11 Education   
        {
            "name": "da834fce-e348-411b-adbb-d46a32486354",
            "un-common-field": [
                { 
                    "Type textaria LName Description": '',
                },
            ],
        },
        {
            "name": "67533acd-364c-4651-91b8-ca3194e11cfd",
            "un-common-field": [
                { 
                    "Type select LName Textbooks Type": [   
                        "School",
                        "College",
                        "University",
                        "English Medium School",
                        "Technical Board",
                        "Madrasha Board", 
                    ], 
                   "Type textaria LName Description": '',
                },
            ],
        }, 
        {
            "name": "8aa0daab-b772-4252-a367-17d21b5e6346",
            "un-common-field": [
                { 
                    "Type select LName Course Type": [   
                        "Spoken English Course",
                        "Computer Training",
                        "Motivational Training",
                        "Entrepreneur Development Training",
                        "Chef Training",
                        "Hotel Management Training",
                    ], 
                   "Type textaria LName Description": '',
                },
            ],
        },
        {
            "name": "1ffebff7-0ec8-4e11-8996-4ae84282f74b",
            "un-common-field": [
                {  
                   "Type textaria LName Description": '',
                },
            ],
        },
        {
            "name": "f6059c19-f1fb-4ba5-bdfc-7cc9938b1b10",
            "un-common-field": [
                {   
                   "Type text LName Course Fee (Instead of Price)": '',
                   "Type textaria LName Description": '',
                },
            ],
        }, 
        {
            "name": "f3f122ad-082e-444d-8508-52f9743f0c3b",
            "un-common-field": [
                {   
                   "Type text LName Course Fee (Instead of Price)": '',
                   "Type textaria LName Description": '',
                },
            ],
        },
        {
            "name": "60efc381-6ad5-4af9-982e-eb49e6b7810b",
            "un-common-field": [
                { 
                    "Type select LName IT Training Type": [   
                        "Fundamental Computer Training",
                        "Ms Office (Word, Excel, PowerPoint)",
                        "Graphics Design (Adobe Photoshop, Illustrator)",
                        "Web Design",
                        "Web Development",
                        "SEO",
                        "Digital Marketing",
                        "Social Media Marketing",
                        "Affiliate Marketing",
                        "Online Freelancing",
                        "Others IT Course",
                    ], 
                   "Type textaria LName IT Training Type Training Fee (Instead of Price)": '',
                   "Type textaria LName Description": '',
                },
            ],
        },
        {
            "name": "4bad1aea-20fb-453b-9d15-198c7a315e27",
            "un-common-field": [
                { 
                    "Type select LName Type of Admission": [   
                        "School",
                        "College",
                        "University",
                        "Madrasha Board",
                        "Technical Education Institute", 
                        "Vocational Institute", 
                        "Polytechnic Institute",
                    ], 
                   "Type textaria LName Type Of Admission Fee (Instead of Price)": '',
                   "Type textaria LName Description": '',
                },
            ],
        },  


        // 12. Fuel, Oil, Gas   problem  
        {
            "name": "4ff2e82f-a071-48cc-8732-7da5263ba55b",
            "un-common-field": [
                { 
                    "Type select LName LP Gas Brand Name ": [   
                        "Bashundhara LPGas",
                        "Omera LPGas",
                        "Jamuna LPGas",
                        "Green LP Gas", 
                        "BM LPGas",
                        "Petromax LPG",
                        "Total LPGas",
                        "LAUGFS LPGas",
                        "G-Gas",
                        "Navana LPGas",
                        "Orion LPGas",
                        "Sena LPGas",
                        "BEXIMCO LPGas",
                        "JMI LPG",
                        "Promita LPGas",
                        "Fresh LPGas",
                        "Uni LPGas",
                        "Universal LPGas",
                        "Euro LPGas",
                        "Delta LPGas",
                        "Bengal LPGas",
                        "Five Ring LP Gas (Dubai Bangla LPG)", 
                        "United LPG",  
                        ],
                    "Type select LName LP Gas Type": [   
                        "Gas type",
                        "Package Cylinder",
                        "Only Refill Cylinder" 
                    ], 
                   "Type textaria LName Description": '',
                },
            ],
        },
        {
            "name": "aed745ba-dcc8-408f-9d95-3be30a8cb393",
            "un-common-field": [
                { 
                    "Type select LName Lubricant Brand Name": [   
                        "Total",
                        "Gulf",
                        "BP-Super V",
                        "Castrol",
                        "Fuchs",
                        "Chevron",
                        "Mobil",
                        "BNO",
                        "ENOC",
                        "SERVO",
                        "MANNOL",
                        "Omera",
                        "Kixx",
                        "PTT",
                    ], 
                   "Type textaria LName Description": '',
                },
            ],
        },
        {
            "name": "dfcc78cf-f8bd-4ff3-8670-2a15e70e1e8e",
            "un-common-field": [
                {  
                   "Type textaria LName Description": '',
                },
            ],
        }, 
        {
            "name": "5655aec1-21d0-4123-befd-8e2ab17dd2b9",
            "un-common-field": [
                {  
                   "Type textaria LName Description": '',
                },
            ],
        },  

        {
            "name": "7668819d-8598-41be-805f-f53aa60f15c9",
            "un-common-field": [
                {  
                   "Type textaria LName Description": '',
                },
            ],
        },  






        {
            "name": "2d388aad-07a1-4c47-9fba-dd65dacea179",
            "un-common-field": [
                {  
                   "Type textaria LName Description": '',
                },
            ],
        },  
        { 
            "name": "4a5d3f0d-4f76-4376-b319-3ff99bd7b3f8",
            "un-common-field": [
                {  
                   "Type textaria LName Description": '',
                },
            ],
        },
        {
            "name": "876a6432-4d58-4b1f-ba5b-fd2ebe827f7a",
            "un-common-field": [
                {  
                   "Type textaria LName Description": '',
                },
            ],  
        },
        {
            "name": "7a025a51-7784-41d9-a08d-818c41adf1ea",
            "un-common-field": [
                {  
                   "Type textaria LName Description": '',
                },
            ],
        },
        {
            "name": "Others",
            "un-common-field": [
                {  
                   "Type textaria LName Description": '',
                },
            ],
        }, 
        // 13. Real Estate & Property
        {
            "name": "7b14806f-6bb9-4251-b731-3a07e65cb9d0",
            "un-common-field": [
                {    
                   "Type textaria LName Description": '', 
                   "Type select LName Land Type": [   
                    "Residential",
                    "Commercial",
                    "Agricultural",
                    "Others",
                    ],  
                   "Type text LName Land/ Plot size in square feet": '', 
                   "Type textaria LName Plot/ land Description": '', 
                   "Type select LName Unit": [   
                    "Residential",
                    "Commercial",
                    "Agricultural",
                    "Others",
                    ],   
                   "Type select LName Unit Price": [   
                    "Residential",
                    "Commercial",
                    "Agricultural",
                    "Others",
                    ],   
                },
            ],
        },
        {
            "name": "cf3e0053-452b-441c-a8b5-5e2a7f27a8da",
            "un-common-field": [
                {    
                   "Type textaria LName Description": '', 
                   "Type text LName Bedrooms": '', 
                   "Type text LName Bathrooms": '', 
                   "Type textaria LName Apartment Description": '', 
                   "Type text LName Apartment Size in square feet": '',      
                },
            ],
        }, 
        {
            "name": "0763b1fe-9f17-4b85-9133-d1d94f813f90",
            "un-common-field": [
                {    
                   "Type textaria LName Description": '', 
                   "Type text LName Bedrooms": '', 
                   "Type text LName Bathrooms": '', 
                   "Type text LName Floor": '', 
                   "Type textaria LName House Description": '', 
                   "Type select LName House Size in square feet": [ 
                        "SQFT",
                        "Acres",
                        "Decimal",
                        "Katha",
                        "Bigha",
                        "Shotok",
                    ], 
                   "Type text LName Unit": '',      
                },
            ],
        }, 
        {
            "name": "c8b8785b-369f-4efd-9be6-8aa002161366",
            "un-common-field": [
                {    
                   "Type textaria LName Description": '', 
                   "Type text LName Property Type": '', 
                   "Type text LName Size in Square feet": '', 
                },
            ],
        },  
        {
            "name": "50c6a538-ac8f-4231-bd3d-f7ab1fce31fe",
            "un-common-field": [
                {    
                   "Type textaria LName Description": '',  
                   "Type select LName Property Tools & Services Type": [    
                        "Building Materials",
                        "Utility Services",
                        "Construction Services",
                        "Packers and Movers",
                        "Interior Design and Decoration",
                        "Pest Control & Cleaning",
                        "Property Documentation",
                        "Others", 
                    ],    
                },
            ],
        }, 
        {
            "name": "8e862d33-757c-4d67-a53b-a8ef640f4980",
            "un-common-field": [
                {    
                   "Type textaria LName Description": '', 
                   "Type text LName Agreement Ration on percentage": '', 
                },
            ],
        },   
        {
            "name": "0374c2db-a19b-46ff-9947-6150f611a12d",
            "un-common-field": [
                {    
                   "Type textaria LName Description": '', 
                   "Type text LName Agreement Ration on percentage": '', 
                },
            ],
        },  
        // 14. Pet & Animals  
        {
            "name": "127eb71d-fea4-4e8b-b49f-43788be0977a",
            "un-common-field": [
                {      
                   "Type select LName Type Of Animals": [    
                            "Albatrosses",
                            "Mouse",
                            "Chickens",
                            "Reptile",
                            "Hummingbirds",
                            "Falcons",
                            "Flamingoes",
                            "Ostriches", 
                            "Owls",
                            "Parrots",
                            "Cats",
                            "Guinea Pig", 
                            "Dog",
                            "Penguins",
                            "Pigeons",
                            "Birds", 
                            "Mammals",
                            "Bats",
                            "Hamsters",
                            "Whales",
                            "Aardvarks",
                            "Rabbits",
                            "Sharks",
                            "Seahorses",
                            "Hagfish",
                            "Eels",
                            "Salmon",
                            "Rays",
                            "Lampreys",
                    ], 
                   "Type textaria LName Description": '',     
                },
            ],
        },
        {
            "name": "79abf0a6-45fb-46ec-b1f9-afb6285481d2",
            "un-common-field": [
                {      
                   "Type select LName Type Of Animals": [   
                            "Poultry",
                            "Livestock",
                            "Others",
                    ], 
                   "Type textaria LName Description": '',     
                },
            ],
        },
        {
            "name": "5000490d-21cd-40d1-afb7-e01c56d3d963",
            "un-common-field": [
                {      
                   "Type select LName Accessories type": [    
                        "Toothbrush",
                        "Nail Trimmer",
                        "Flea Preventative",
                        "Stain and Odor Remover",
                        "Food for a New Dog or Cat",
                        "Water and Food Bowls",
                        "Leash and Collar",
                        "Pet Identification Tag and Microchip",
                        "Pet First Aid Kit",
                        "Pet Bed",
                        "Treats and Toys",
                        "Pet Grooming Brush",
                        "Poop Disposal",
                        "Sterile gauze pads",
                        "Bandages",
                        "Adhesive tap",
                        "Antiseptic wipes",
                        "Antibiotic ointment",
                        "Cotton balls",
                        "Hydrogen peroxide",
                        "Tweezers",
                        "Digital thermometer",
                        "Optionally a muzzle",
                        "Poultry",
                        "Livestock",
                        "Others",
                    ], 
                   "Type textaria LName Description": '',     
                },
            ],
        }, 
        {
            "name": "361b87ce-7a55-44f0-b7f2-ed824eb6c7a8",
            "un-common-field": [
                {        
                   "Type textaria LName Description": '',     
                },
            ],
        },        
        
        

        // 15. PM Food Bank & Restaurant  
        {
            "name": "d05f910c-c01a-4ec4-a0f5-e38f8438c625",
            "un-common-field": [
                {        
                    "Type select LName Type Of Food": [    
                        "Key Lime Pie",
                        "Tater Tots",
                        "San Francisco Sourdough Bread",
                        "Cobb Salad",
                        "Pot Roast",
                        "Twinkies",
                        "Jerky",
                        "Fajitas",
                        "Banana Split",
                        "Cornbread",
                        "GORP",
                        "Jambalaya",
                        "Biscuits ‘n’ Gravy",
                        "Smithfield Ham",
                        "Chicken Fried Steak",
                        "Wild Alaska Salmon",
                        "California Roll",
                        "Meatloaf",
                        "Grits",
                        "Macaroni and Cheese",
                        "Maryland Crab cakes",
                        "Potato Chips",
                        "Cioppino",
                        "Fortune Cookies",
                        "Peanut Butter Sandwich",
                        "Baked Beans",
                        "Popcorn",
                        "Fried Chicken andWaffles",
                        "New England clam chowder",
                        "New Mexican Flat Enchiladas",
                        "S’mores",
                        "Lobster Rolls",
                        "Buffalo wings",
                        "Barbecue Ribs",
                        "BLT",
                        "Apple Pie",
                        "Frito Pie",
                        "Po’boy",
                        "Green Chile Stew",
                        "Chocolate-chip cookies",
                        "Blueberry cobber",
                        "Delmonico’s steak",
                        "Chicago-style Pizza",
                        "Nachos",
                        "Philly cheese steak",
                        "Hot Dogs",
                        "Reuben Sandwich",
                        "Cheeseburger",
                        "Thanksgiving dinner",
                        "Others",
                    ], 
                   "Type textaria LName American Food Description": '',     
                },
            ],
        },
        {
            "name": "0347f080-a5f7-4d97-a601-7039a93a113e",
            "un-common-field": [
                {        
                    "Type select LName Type Of Food Item": [    
                        "Bakery", 
                        "Sweets", 
                        "Cake", 
                    ],
                    "Type select LName Food Item Name": [    
                        "Bars",
                        "Breads",
                        "Bagels",
                        "Buns",
                        "Rolls",
                        "Biscuits",
                        "Loaf Breads", 
                        "Cookies",
                        "Muffins",
                        "Doughnuts",
                        "Danish",
                        "Sweet Rolls", 
                        "Cinnamon Rolls", 
                        "Tortillas",
                        "Rose Cupcakes", 
                        "Orange-almond cake",
                        "Braided Easter bread",
                        "Irish coffee macarons",
                        "Flourless peanut butter chocolate chip cookies",
                        "Quick apple cake",
                        "Simple lemon poppy seed muffins",
                        "Classic German cheesecake",
                        "Flourless chocolate cake",
                        "Apricot clafoutis",
                        "Marbled coffee cake",
                        "Apple crumble in a glass",
                        "Carrot cake with cream cheese frosting",
                        "Cinnamon-apple muffins with streusel",
                        "Raspberry molten chocolate cupcakes",
                        "Blueberry muffins",
                        "Fudgy Brownies",
                        "Chewy chocolate chip cookies",
                        "Fluffy plum streusel cake",
                        "Butter Cake",
                        "Pound Cake",
                        "Sponge Cake",
                        "Genoise Cake",
                        "Biscuit Cake",
                        "Angel Food Cake",
                        "Chiffon Cake",
                        "Baked Flourless Cake",
                        "Unbaked Flourless Cake",
                        "Carrot Cake",
                        "Red Velvet Cake",
                        "Yellow Butter Cake",
                        "Upside-Down Cake",
                        "Devil’s Food Cake",
                        "Hummingbird Cake",
                        "Opera Cake",
                        "Lady Baltimore Cake",
                        "Fruit Cake",
                        "Banana Cake",
                        "Lemon Cake",
                        "Citrus Coconut Cake",
                        "Vanilla Cake",
                        "Amriti",
                        "Bundiya",
                        "Chanar Goja",
                        "Chanar Jilapi",
                        "Chanar Kheer",
                        "Chandramukhi",
                        "Chanar Payesh", 
                        "Chomchom",
                        "Kalojam",
                        "Kheersagar",
                        "Lyangcha",
                        "Malpua",
                        "Rajbhog",
                        "Rasabali",
                        "Roshogolla",
                        "Sandesh",
                        "Shahi Jilapi", 
                        "Tusha Shinni", 
                        "Sitabhog",
                        "Shor Bhaja", 
                        "Pantua",
                        "Kacha Golla",  
                    ],  
                   "Type textaria LName Bakery, Sweets & Cake Description": '',     
                },
            ],
        },
        {
            "name": "0e3358de-b25b-4569-9e50-cdb80187b038",
            "un-common-field": [
                {      
                   "Type select LName Type Of Burger": [    
                        "Beef Burgers",
                        "Elk Burgers",
                        "Portobello Mushroom Burgers",
                        "Turkey Burgers",
                        "Veggie Burgers",
                        "Bison Burgers",
                        "Wild Salmon Burgers",
                        "Black Bean Burgers",
                        "Chilli Burger with Pepper Relish",
                        "Perfect Lamb Satay Burger",
                        "Lamb and Tomato Stuffed Burger",
                        "Crunchy Chicken and Fish Burger",
                        "Chicken Feta Cheese Burger with Potato Salad",
                        "Lentil and Mushroom Burger ",
                        "Stuffed Bean Burger",
                        "Lamb Burger with Radish Slaw",
                        "Potato Corn Burger",
                        "Supreme Veggie Burger",
                        "Butter Chicken twin Burgers",
                        "Rajma Patty Burger",
                        "Pizza Burger",
                        "Millionaire Burger",
                        "Smash Burger",
                        "Classic Cheese Burger",
                        "Shroom Burger",
                        "Beef Cheese Burger",
                    ], 
                   "Type textaria LName Burger Description": '',     
                },
            ],
        },
        {
            "name": "96203f7b-2b7b-4d46-bd20-f2e1da6be14d",
            "un-common-field": [
                {      
                   "Type select LName Type Of Chinese Food": [    
                        "Peking Roasted Duck",
                        "Kung Pao Chicken",
                        "Sweet and Sour Pork",
                        "Dim Sum",
                        "Chinese Dumplings",
                        "Ma Po Tofu",
                        "Char Siu",
                        "Chow Mein",
                        "Fried Rice",
                        "Twice-Cooked Pork Slices",
                        "Sichuan Pork",
                        "Xiaolongbao",
                        "Zhajiangmian",
                        "Wonton Soup",
                        "Spring Rolls",
                        "Yangzhou Fried Rice",
                        "Cantonese Fried Rice",
                        "Fujian Fried Rice",
                        "Hot Pot",
                        "Stinky Tofu",
                        "Congee",
                        "Chinese Hamburger",
                        "Scallion Pancakes",
                        "Kung Pao Chicken",
                        "Baozi",
                        "Char Siu",
                        "Soup Dumplings",
                        "Chinese Sticky Rice",
                        "Hainanese Chicken Rice",
                        "Seasoned Steamed Eggplant",
                        "Jiaozi",
                        "Others",
                    ], 
                   "Type textaria LName Chinese Food Description": '',     
                },
            ],
        },
        {
            "name": "4019537a-ba5a-4a5c-896e-18367824e7b0",
            "un-common-field": [
                {      
                   "Type select LName Type Of Dessert": [   
                        "Cream Brulee",
                        "Mochi",
                        "Apple Pie",
                        "Nanaimo Bar",
                        "Gulab Jamun",
                        "Pakhlava",
                        "Kardinalschnitten",
                        "Dadar Gulung",
                        "Poffertjes",
                        "Kremes",
                        "Yogurt Doi of Bogra",
                        "Chanar Pulao of Jamalpur",
                        "Porabari ChomChom of Tangail",
                        "Chandramukhi of Brahmanbaria",
                        "Balish Misti of Netrokona",
                        "Rasamanjari of Gaibandha",
                        "Rasmalai of Comilla",
                        "Kachagolla of Natore",
                        "Pera Sandesh of Naogaon",
                        "Sabitri 7 Roskodombo of Meherpur",
                        "Others", 
                    ], 
                   "Type textaria LName Dessert Description": '',     
                },
            ],
        },
        {
            "name": "23ca284d-7e64-4959-a01b-fecb4d481287",
            "un-common-field": [
                {      
                   "Type select LName Type Of Fast Food": [   
                        "Chicken Rolls",
                        "Hot Dogs",
                        "Chicken Burger",
                        "Sandwich",
                        "Waffle Fires",
                        "French Fries",
                        "Chicken Sandwich",
                        "Smash Burger",
                        "Shack Burger",
                        "Vegetable Burger",
                        "Vegetable Rolls",
                        "Chicken Rolls",
                        "Beef Burger",
                        "Beef Rolls",
                        "Egg Rolls",
                        "Chicken Tenders",
                        "Biscuits",
                        "Soft Tacos",
                        "Cajun Fries",
                        "Double Shack Burger",
                        "Baked Apple Pie",  
                        "Hash Browns",
                        "Chicken Biscuit",
                        "Steak Burgers",
                        "Chicken Steak",
                        "Beef Steak",
                        "Egg Mcmuffin",
                        "Roast Beef Sandwich",
                        "Chicken Fingers",
                        "Cheese Burger",
                        "Chicken Quesadilla",
                        "Honey BBQ chicken Sandwich", 
                        "Cherry Limeade",
                        "Soft Cookies",
                        "Glazed Doughnut",
                        "Filet-O-Fish",
                        "Fried Fish",
                        "Fried Rice",
                        "Others", 
                    ], 
                   "Type textaria LName Fast Food Description": '',     
                },
            ],
        }, 
        {
            "name": "4e1c1afa-3e8d-429a-af09-5f26120f9366",
            "un-common-field": [
                {      
                   "Type select LName Type Of Food": [   
                        "Water",
                        "Dark Green Vegetables",
                        "Whole Grains",
                        "Beans and Lentils",
                        "Fish",
                        "Berries",
                        "Winter Squash",
                        "Soy",
                        "Flaxseed, Nuts and Seeds",
                        "Organic Yogurt",
                    ], 
                   "Type textaria LName Dessert Description": '',     
                },
            ],
        },
        {
            "name": "c520a14f-57bd-4a55-9ee0-4422d3c6d346",
            "un-common-field": [
                {      
                   "Type select LName Type Of Food": [   
                        "Masala dosa",
                        "Dal makhani",
                        "Indian Chaat",
                        "Vada pav",
                        "Dhokla",
                        "Barfi",
                        "Hyderabadi biryani",
                        "Stuffed parata", 
                        "Pani puri",
                        "Idli",
                    ], 
                   "Type textaria LName Indian Food Description": '',     
                },
            ],
        }, 
        {
            "name": "b66e7b5b-73f8-4943-8f21-61b0a2552c58",
            "un-common-field": [
                {      
                   "Type select LName Type Of Food": [   
                        "Lasagne",
                        "Italian pizza",
                        "Pasta",
                        "Spaghetti",
                        "Mojito",
                        "Polenta",
                    ], 
                   "Type textaria LName Italian Food Description": '',     
                },
            ],
        }, 
        {
            "name": "4476c163-c3c4-48c4-9bdd-b7303697cb3f",
            "un-common-field": [
                {      
                   "Type select LName Type Of Food": [   
                        "Sushi",
                        "Sashimi",
                        "Tofu",
                        "Beef Ramen",
                        "Miso Soup",
                        "Cheese cake",
                        "Chicken teriyaki",
                        "Shrimp tempura",
                    ], 
                   "Type textaria LName Japanese Food Description": '',     
                },
            ],
        }, 
        {
            "name": "ad64e61a-c1b2-4fa8-a81d-b2957b1bdfdb",
            "un-common-field": [
                {      
                   "Type select LName Type Of Food": [    
                        "Ramen noodles",
                        "Kimchi",
                        "Bibimbap",
                        "Beef bulgogi",
                        "Beef brisket",
                        "Chiken bulgogi",
                        "Assorted sushi",
                        "Tempura prawn",
                        "Miso soup",
                        "Iced tea", 
                    ], 
                   "Type textaria LName Korean Food Description": '',     
                },
            ],
        },     
        {
            "name": "ec5beee9-5f7a-4edd-8085-287215edf1e8",
            "un-common-field": [
                {      
                   "Type select LName Type Of Food": [   
                        "Beef Nachos",
                        "Beef Strip Steak",
                        "Chicken Burrito",
                        "Salsa",
                        "Tacos Al Carbon",
                        "Deep-Fried Ice Cream",
                        "Peach Melba",
                        "Taco Salad",
                    ], 
                   "Type textaria LName Mexican Food Description": '',     
                },
            ],
        },    
        {
            "name": "6a36d43c-7840-404a-8228-adafe84b33d5",
            "un-common-field": [
                {      
                   "Type select LName Type Of Food": [   
                        "Arabian Kabsa",
                        "Arabian Pasta",
                        "Arabic Pita Bread",
                        "Hummus",
                        "Laham Meshwi",
                        "Chicken Al-faham",
                        "Ruz Bukhari Sada",
                    ], 
                   "Type textaria LName Middle Eastern Food Description": '',     
                },
            ],
        },  
        {
            "name": "c645de40-9f6c-48a6-9620-810574b6ecc3",
            "un-common-field": [
                {      
                   "Type select LName Type Of Food": [  
                        "Beef Pizza",
                        "Chicken Pizza",
                        "Vegetable Pizza",
                        "Fish Pizza",
                    ], 
                   "Type textaria LName Pizza Description": '',     
                },
            ],
        }, 
        {
            "name": "3abe928d-f42f-47ce-99bf-e4e3763fb7c9",
            "un-common-field": [
                {       
                   "Type text LName Type Of Food": '',
                   "Type textaria LName Food Description": '',     
                },
            ],
        },  
        {
            "name": "d68294d1-1671-43b2-a726-0d527434dd04",
            "un-common-field": [
                {       
                   "Type text LName Type Of Food": '', 
                   "Type textaria LName Food Description": '',     
                },
            ],
        }, 
        {
            "name": "4822b638-2fd4-4697-aedb-cd0877280075",
            "un-common-field": [
                {       
                   "Type text LName Type Of Food": '',
                   "Type textaria LName Food Description": '',     
                },
            ],
        }, 
        {
            "name": "5c5ae8e0-b61c-4f25-96d6-aa9fe05737ec",
            "un-common-field": [
                {      
                   "Type text LName Type Of Food": '',  
                   "Type textaria LName Food Description": '',     
                },
            ],
        }, 
        {
            "name": "4d55a130-c836-4f9e-a59c-67f5c5662269",
            "un-common-field": [
                {       
                    "Type text LName Type Of Food": '',
                   "Type textaria LName Food Description": '',     
                },
            ],
        },  
        {
            "name": "4a5ffce1-f42b-4bd8-96ec-d12adf00494c",
            "un-common-field": [
                {     
                   "Type text LName Type Of Food": '',  
                   "Type textaria LName Food Description": '',     
                },
            ],
        },      
        {
            "name": "38b25b75-37bd-4995-bd66-64ce16a18f8e",
            "un-common-field": [
                {   
                    "Type text LName Type Of Food": '',    
                   "Type textaria LName Food Description": '',     
                },
            ],
        },                    

              



        //    16 Personal Advertisement 
        {
            "name": "895b308e-8da8-430e-8444-ed406119a8ae",
            "un-common-field": [
                {  
                    "Type text  LName E-mail": '',    
                    "Type text  LName Education": '',    
                    "Type text  LName Current Position": '',    
                    "Type text  LName Occupation": '', 
                    "Type radio LName Gender": [
                        "Male", 
                        "Female", 
                        "Others", 
                    ],   
                    "Type text  LName Experience": '',    
                    "Type text  LName Social Status": '',    
                    "Type text  LName Contribution For Country, People & Society": '',      
                },
            ],
        }, 
        {
            "name": "c6c655b6-7b6a-4408-a9f7-5a132b60203d",
            "un-common-field": [
                {  
                    "Type text LName E-mail": '',    
                    "Type text LName Education": '',    
                    "Type text LName Current Position": '',    
                    "Type text LName Occupation": '', 
                    "Type radio LName Gender": [
                        "Male", 
                        "Female", 
                        "Others", 
                    ],     
                    "Type text LName Experience": '',    
                    "Type text LName Social Status": '',    
                    "Type text LName Contribution For Country, People & Society": '',      
                },
            ],
        }, 
        {
            "name": "8e6cd794-e689-4f97-9289-7f1d3a0d6f8f",
            "un-common-field": [
                {  
                    "Type text LName E-mail": '',    
                    "Type text LName Education": '',    
                    "Type text LName Current Position": '',    
                    "Type text LName Occupation": '', 
                    "Type radio LName Gender": [
                        "Male", 
                        "Female", 
                        "Others", 
                    ],    
                    "Type text LName Experience": '',    
                    "Type text LName Social Status": '',    
                    "Type text LName Contribution For Country, People & Society": '',      
                },
            ],
        }, 
        {
            "name": "f5997be1-d033-413b-b4a3-d3ecebb886c4",
            "un-common-field": [
                {  
                    "Type text LName E-mail": '',    
                    "Type text LName Education": '',    
                    "Type text LName Current Position": '',    
                    "Type text LName Occupation": '',
                    "Type radio LName Gender": [
                        "Male", 
                        "Female", 
                        "Others", 
                    ],    
                    "Type text LName Experience": '',    
                    "Type text LName Social Status": '',    
                    "Type text LName Contribution For Country, People & Society": '',      
                },
            ],
        }, 
        {
            "name": "64529ab9-2a89-426d-bfea-80312fddf076",
            "un-common-field": [
                {  
                    "Type text LName E-mail": '',    
                    "Type text LName Education": '',    
                    "Type text LName Current Position": '',    
                    "Type text LName Occupation": '', 
                    "Type radio LName Gender": [
                        "Male", 
                        "Female", 
                        "Others", 
                    ],      
                    "Type text LName Experience": '',    
                    "Type text LName Social Status": '',    
                    "Type text LName Contribution For Country, People & Society": '',      
                },
            ],
        }, 
        {
            "name": "2802a594-b228-4143-83f7-6244dec23139",
            "un-common-field": [
                {  
                    "Type text LName E-mail": '',    
                    "Type text LName Education": '',    
                    "Type text LName Current Position": '',    
                    "Type text LName Occupation": '', 
                    "Type radio LName Gender": [
                        "Male", 
                        "Female", 
                        "Others", 
                    ],     
                    "Type text LName Experience": '',    
                    "Type text LName Social Status": '',    
                    "Type text LName Contribution For Country, People & Society": '',      
                },
            ],
        }, 
        {
            "name": "7a88aa1f-e639-4bdd-bbc5-466044fef9a3",
            "un-common-field": [
                {  
                    "Type text LName E-mail": '',    
                    "Type text LName Education": '',    
                    "Type text LName Current Position": '',    
                    "Type text LName Occupation": '', 
                    "Type radio LName Gender": [
                        "Male", 
                        "Female", 
                        "Others", 
                    ],   
                    "Type text LName Experience": '',    
                    "Type text LName Social Status": '',    
                    "Type text LName Contribution For Country, People & Society": '',      
                },
            ],
        }, 
        {
            "name": "4faa9d61-c107-40eb-8d29-36c970838dfb",
            "un-common-field": [
                {  
                    "Type text LName E-mail": '',    
                    "Type text LName Education": '',    
                    "Type text LName Current Position": '',    
                    "Type text LName Occupation": '', 
                    "Type radio LName Gender": [
                        "Male", 
                        "Female", 
                        "Others", 
                    ],     
                    "Type text LName Experience": '',    
                    "Type text LName Social Status": '',    
                    "Type text LName Contribution For Country, People & Society": '',      
                },
            ],
        }, 
        {
            "name": "87b03446-f465-4dca-92b2-4c6abcb1a3f9",
            "un-common-field": [
                {  
                    "Type text LName E-mail": '',    
                    "Type text LName Education": '',    
                    "Type text LName Current Position": '',    
                    "Type text LName Occupation": '', 
                    "Type radio LName Gender": [
                        "Male", 
                        "Female", 
                        "Others", 
                    ],   
                    "Type text LName Experience": '',    
                    "Type text LName Social Status": '',    
                    "Type text LName Contribution For Country, People & Society": '',      
                },
            ],
        }, 
        {
            "name": "c77c54fa-69f0-4233-a3df-8de350281ea0",
            "un-common-field": [
                {  
                    "Type text LName E-mail": '',    
                    "Type text LName Education": '',    
                    "Type text LName Current Position": '',    
                    "Type text LName Occupation": '', 
                    "Type radio LName Gender": [
                        "Male", 
                        "Female", 
                        "Others", 
                    ],   
                    "Type text LName Experience": '',    
                    "Type text LName Social Status": '',    
                    "Type text LName Contribution For Country, People & Society": '',      
                },
            ],
        }, 
        {
            "name": "831a266f-f1b1-441a-8b36-4148c02686c6",
            "un-common-field": [
                {  
                    "Type text LName E-mail": '',    
                    "Type text LName Education": '',    
                    "Type text LName Current Position": '',    
                    "Type text LName Occupation": '', 
                    "Type radio LName Gender": [
                        "Male", 
                        "Female", 
                        "Others", 
                    ],   
                    "Type text LName Experience": '',    
                    "Type text LName Social Status": '',    
                    "Type text LName Contribution For Country, People & Society": '',      
                },
            ],
        }, 
        {
            "name": "990d0623-0800-4429-80ee-c0c11829601f",
            "un-common-field": [
                {  
                    "Type text LName E-mail": '',    
                    "Type text LName Education": '',    
                    "Type text LName Current Position": '',    
                    "Type text LName Occupation": '', 
                    "Type radio LName Gender": [
                        "Male", 
                        "Female", 
                        "Others", 
                    ],   
                    "Type text LName Experience": '',    
                    "Type text LName Social Status": '',    
                    "Type text LName Contribution For Country, People & Society": '',      
                },
            ],
        }, 
        {
            "name": "7a40638b-48f8-42d4-a582-3cf735862841",
            "un-common-field": [
                {  
                    "Type text LName E-mail": '',    
                    "Type text LName Education": '',    
                    "Type text LName Current Position": '',    
                    "Type text LName Occupation": '', 
                    "Type radio LName Gender": [
                        "Male", 
                        "Female", 
                        "Others", 
                    ],   
                    "Type text LName Experience": '',    
                    "Type text LName Social Status": '',    
                    "Type text LName Contribution For Country, People & Society": '',      
                },
            ],
        }, 
        {
            "name": "2c359004-a63c-49ba-9c73-1e7a9192b135",
            "un-common-field": [
                {  
                    "Type text LName E-mail": '',    
                    "Type text LName Education": '',    
                    "Type text LName Current Position": '',    
                    "Type text LName Occupation": '', 
                    "Type radio LName Gender": [
                        "Male", 
                        "Female", 
                        "Others", 
                    ],   
                    "Type text LName Experience": '',    
                    "Type text LName Social Status": '',    
                    "Type text LName Contribution For Country, People & Society": '',      
                },
            ],
        }, 
        {
            "name": "63783b5f-c741-4cf8-933c-1b8c75fb554f",
            "un-common-field": [
                {  
                    "Type text LName E-mail": '',    
                    "Type text LName Education": '',    
                    "Type text LName Current Position": '',    
                    "Type text LName Occupation": '', 
                    "Type radio LName Gender": [
                        "Male", 
                        "Female", 
                        "Others", 
                    ],   
                    "Type text LName Experience": '',    
                    "Type text LName Social Status": '',    
                    "Type text LName Contribution For Country, People & Society": '',      
                },
            ],
        }, 






        // 17. Companies Product Branding 
        {
            "name": "2f466e7e-952f-4bff-99f0-df5204ad1ab8",
            "un-common-field": [
                {  
                    "Type text LName Item type": '',     
                    "Type text LName Product Description": '',   
                },
            ],
        },

        // 22. other 
        {
            "name": "8689e7dc-b60c-4095-80af-aec50e4f9436",
            "un-common-field": [
                {  
                    "Type text LName Item type": '',     
                    "Type text LName Description": '',   
                },
            ],
        },
    


        // 18. no
        {
            "name": "38af8351-607e-4e0f-b45c-9861c0014576",
            "un-common-field": [
                {    
                    "Type select LName Service/Repair Type": [ 
                        "Mobile Servicing",
                        "Computer Servicing",
                        "TV Repair",
                        "Fridge Repair",
                        "AC Repair",
                        "Fan Repair",
                        "Air Cooler Repair",
                        "Washing Machine Repair",
                        "Electric Oven Repair",  
                    ],  
                    "Type textaria LName Description": '',    
                    "Type text LName Service Charge Instead of Price": '',   
                },
            ],
        },
        { 
            "name": "6c53f5ca-b2a4-48f9-8b59-79d6f083ced3",
            "un-common-field": [
                {    
                    "Type select LName IT Services Type": [ 
                        "Internet Provider",
                        "Website / Domain Hosting",
                        "Web Design",
                        "Web Development",
                        "Networking",
                        "Software/Apps", 
                    ],     
                    "Type textaria LName Description": '',    
                    "Type text LName Service Charge Instead of Price": '',   
                },
            ],
        },
        {
            "name": "da5b452a-ee9d-4746-9220-91756a628f09",
            "un-common-field": [
                {    
                    "Type select LName Services Type": [ 
                        "Wedding Party",
                        "Marriage Anniversary",
                        "Birthday Party",
                        "Picnic",
                        "Company Anniversary",
                        "Seminars",
                        "Conferences",
                        "Social & Cultural Events",
                        "Public Campaign",
                        "Promotional Events", 
                    ],    
                    "Type textaria LName Description": '',    
                    "Type text LName Service Charge Instead of Price": '',   
                },
            ],
        }, 
        {
            "name": "5643d326-c75b-45ea-9966-6a4178565fe1",
            "un-common-field": [
                {      
                    "Type textaria LName Description": '',    
                    "Type text LName Service Charge Instead of Price": '',   
                },
            ],
        }, 
        {
            "name": "3888d4f8-e442-46cd-9ad2-453514007dda",
            "un-common-field": [
                {         
                    "Type textaria LName Description": '',    
                    "Type text LName Service Charge Instead of Price": '',   
                },
            ],
        }, 
        {
            "name": "124b96f3-26ed-481a-a0d3-92fc7d7790f3",
            "un-common-field": [
                {    
                    "Type select LName Services Type": [ 
                        "Beauty Parlor",
                        "Grooming",
                        "Salon",
                        "Yoga & Gym",
                        "Spa",
                        "Others",             
                    ],     
                    "Type textaria LName Description": '',    
                    "Type text LName Service Charge Instead of Price": '',   
                },
            ],
        }, 
        {
            "name": "4128e3ab-47d4-4c32-a77b-19ad07e61eb1",
            "un-common-field": [
                {    
                    "Type select LName Services Type": [ 
                        "Maid Service",
                        "Care Giving Service",
                        "Daycare Service",
                        "Gardening Service",
                        "Driver on Demand",
                        "Others ",
                    ],     
                    "Type textaria LName Description": '',    
                    "Type text LName Service Charge Instead of Price": '',   
                },
            ],
        }, 
        {
            "name": "992f9549-de11-437c-8bb9-1ede0cd45aee",
            "un-common-field": [
                {         
                    "Type textaria LName Description": '',    
                    "Type text LName Service Charge Instead of Price": '',   
                },
            ],
        }, 
        {
            "name": "e14b8d70-efd8-4ef5-b385-fe6d474c47d2",
            "un-common-field": [
                {         
                    "Type textaria LName Description": '',    
                    "Type text LName Service Charge Instead of Price": '',   
                },
            ],
        }, 
        {
            "name": "2ac892d8-6cd4-48b6-94aa-53fa61418062",
            "un-common-field": [
                {        
                    "Type textaria LName Description": '',    
                    "Type text LName Service Charge Instead of Price": '',   
                },
            ],
        }, 
        {
            "name": "523deaff-751c-4a25-8e24-21ba1559d204",
            "un-common-field": [
                {          
                    "Type textaria LName Description": '',    
                    "Type text LName Service Charge Instead of Price": '',   
                },
            ],
        },  







        
        // 19. Companies Product Branding 
        {
            "name": "ae1dca02-2210-442f-bc38-ab061a9606dd",
            "un-common-field": [
                {     
                    "Type select LName Tickets Type": [ 
                        "International",
                        "Domestic", 
                    ],     
                    "Type textaria LName Tickets Description": '',    
                },
            ],
        },
        {
            "name": "bdf5a8e4-d5e9-451d-8624-8ca457edae22",
            "un-common-field": [
                {     
                    "Type select LName Select your visa type": [   
                        "Student Visa",
                        "Business Visa",
                        "Work Permit Visa", 
                        "Tourist Visa",
                        "All Kinds of Visa"   
                    ],     
                    "Type textaria LName Visa Description": '',    
                },
            ],
        },
        {
            "name": "f7c6a15e-b4c0-450d-b272-a004e626886c",
            "un-common-field": [
                {      
                    "Type text LName Company/ Agency Name": '',    
                    "Type textaria LName Tickets Description": '',    
                },
            ],
        }, 
        {
            "name": "45876009-fcbc-46be-b239-9cdec556a126",
            "un-common-field": [
                {     
                    "Type select LName Type of Services": [ 
                        "Hotel Booking Manage",
                        "Transport Manage",
                        "Tourist Guide",
                        "Breakfast, Lunch & Dinner Facilities Manage",
                        "Others", 
                    ],     
                    "Type textaria LName Service Description": '',  
                },
            ],
        },  
      //20 Local Business Point
       {
            "name": "4f556275-0c3a-4696-aa4f-ec99cb9f206c",
            "un-common-field": [
                {  
                    "Type text LName Dokan Name": '', 
                    "Type text LName Proprietor Name": '', 
                    "Type textaria LName Description": '',
                    "Type text LName Dokan Location": '', 
                },
            ],
        },  
        {
            "name": "85fd28ab-11d8-4e48-a34e-fe06c96d5b82",
            "un-common-field": [
                {  
                    "Type text LName Enterprise Name": '', 
                    "Type text LName Proprietor Name": '', 
                    "Type textaria LName Description": '',
                    "Type text LName Enterprise Location": '', 
                },
            ],
        },  
        {
            "name": "0b083908-dcb7-4701-b2f0-78f8cbc5be3b",
            "un-common-field": [
                {  
                    "Type text LName Traders Name": '', 
                    "Type text LName Proprietor Name": '', 
                    "Type textaria LName Description": '',
                    "Type text LName Traders Location": '', 
                },
            ],
        },  
        {
            "name": "eb153117-f167-4811-afb7-98e1cc50de16",
            "un-common-field": [
                {    
                    "Type text LName Store Name": '', 
                    "Type text LName Proprietor Name": '', 
                    "Type textaria LName Description": '',
                    "Type text LName Store Location": '', 
                },
            ],
        },  
        {
            "name": "22180ab5-aacc-4d04-9620-e12f893a81ea",
            "un-common-field": [
                {  
                    "Type text LName Business Type": '',  
                    "Type textaria LName Business Description": '', 
                },
            ],
        },

        // 21. Resort, Hotel & Community Center
         {
            "name": "9fbe33d0-ac55-4193-a0f1-89347bda13ce",
            "un-common-field": [
                { 
                    "Type text LName Resort Name": '',
                    "Type text LName Resort Location": '',
                    "Type select LName Room Type": [
                        "Single Room", 
                        "Double Room", 
                        "Couple Room", 
                    ], 
                    "Type textaria LName Resort Description": '',
                },
            ],
        }, 
        {
            "name": "76d54f32-9caf-4115-bd02-1ffd8bc9f40d",
            "un-common-field": [
                { 
                    "Type text LName Hotel Name": '',
                    "Type text LName Hotel Location": '',
                    "Type select LName Hotel Type": [ 
                        "2 Star", 
                        "3 Star", 
                        "4 Star", 
                        "5 Star", 
                    ],
                    "Type select LName Room Type": [ 
                        "Single Room", 
                        "Double Room", 
                        "Couple Room", 
                    ], 
                    "Type textaria LName Hotel Description": '',
                },
            ],
        },  
        {
            "name": "e8bb3d14-369b-4f17-a949-362f41c561f0",
            "un-common-field": [
                { 
                    "Type text LName Community & Party Center Name": '',
                    "Type text LName Location": '',  
                    "Type textaria LName Description": '',
                },
            ],
        },    



    //    21. Rent, To-let 
        {
            "name": "32a55b99-4c6f-4cbe-ac01-891709d90856",
            "un-common-field": [
                {     
                    "Type text LName Bedrooms": '', 
                    "Type text LName Bathrooms": '', 
                    "Type text LName Balcony": '', 
                    "Type select LName Utility Bill Mode": [ 
                        "Including", 
                        "Excluding", 
                    ], 
                    "Type textaria LName Apartment description": '', 
                    "Type text LName Rental Price": '', 
                    "Type text LName Apartment Size in square feet": '', 
                    "Type text LName Floor": '', 
                    "Type select LName Service Charge Mode": [ 
                        "Including", 
                        "Excluding",  
                    ],  
                },
            ],
        },   
        {
            "name": "f9350d61-0cf4-4200-811d-5b79503628a9",
            "un-common-field": [
                {   
                    "Type select LName Space Condition": [ 
                        "Open Space", 
                        "Room Condition", 
                    ],
                    "Type select LName Commercial Space Type": [ 
                        "Multifamily",
                        "Office",
                        "Industrial",
                        "Retail Stores",
                        "Hotel",
                        "Hospitality",
                        "Mixed Use",
                        "Land",
                        "Special Purpose",
                        "Malls",
                        "Medical Centre",   
                        "Farm House",
                        "Warehouses",
                        "Garages",
                        "Store House",
                        "Others", 
                    ], 
                    "Type select LName Utility Bill Mode": [ 
                        "Including", 
                        "Excluding", 
                    ],   
                    "Type textaria LName Property Description": '', 
                    "Type text LName Rental Price": '', 
                    "Type text LName Commercial Space Size in square feet": '', 
                    "Type text LName Floor": '',   
                    "Type select LName Service Charge Mode": [ 
                        "Including", 
                        "Excluding", 
                    ], 
                },
            ],
        },   
        {
            "name": "53ec246e-ca05-4b93-ab4b-2dfb45926504",
            "un-common-field": [
                {    
                    "Type text LName Shop Size in square feet": '', 
                    "Type text LName Floor": '',  
                    "Type text LName Shop Rental Price": '',  
                },
            ],
        },  
        {
            "name": "4d4d92a0-d5f4-4bf9-9f2e-b86defc3a5b2",
            "un-common-field": [
                {    
                    "Type text LName Bedrooms": '', 
                    "Type text LName Bathrooms": '', 
                    "Type text LName Balcony": '',  
                    "Type select LName Utility Bill Mode": [ 
                        "Including", 
                        "Excluding", 
                    ], 
                    "Type textaria LName House description": '', 
                    "Type text LName House Rental Price": '',
                    "Type text LName House Size in square feet ": '',
                    "Type text LName Floor": '',  
                    "Type select LName Service Charge Mode": [ 
                        "Including", 
                        "Excluding", 
                    ], 
                },
            ],
        },  
        {
            "name": "e43dc692-f790-4f32-9fa0-4a1162aef7d4",
            "un-common-field": [
                {   
                    "Type select LName Type of Garages": [ 
                        "Car",
                        "Motorcycle",
                        "Van",
                        "Cover Van",
                        "Bicycle",
                        "Bus ",
                        "Trucks",
                        "Rickshaws",
                        "CNG",
                        "Others", 
                    ],  
                    "Type textaria LName Garages Description": '',
                    "Type text LName Garages Rental Price": '', 
                },
            ],
        }, 
        {
            "name": "553fda30-659c-4e48-9c05-6940a4a98b44",
            "un-common-field": [
                {    
                    "Type text LName Number Of Room": '', 
                    "Type text LName Others Facilities": '', 
                    "Type textaria LName Description": '',
                },
            ],
        }, 
        {
            "name": "8c28b666-b3fb-4efb-956e-248c2d4b0159",
            "un-common-field": [
                {    
                    "Type text LName Number of seats": '', 
                    "Type text LName Floor": '',  
                    "Type select LName Utility Bill Mode": [ 
                        "Including", 
                        "Separate Room", 
                    ],  
                    "Type textaria LName Mess description": '', 
                    "Type select LName Space Condition": [ 
                        "Open Space", 
                        "Open Space", 
                    ],  
                    "Type select LName Service Charge Mode": [ 
                        "Including", 
                        "Excluding", 
                    ], 
                    "Type text LName Rental Price": '',  
                },
            ],
        } 
    ]
 

    const adCategoryBtn = () => {
        setAdCategorySelect(true)
        setCategoryParam(adCategory)
        setCategoryParamRoute('/ad/post/')
        setAdCategorySave(true)
        setLocationRoute('/ad/post/')
    }

    let navigate = useNavigate();

    const submitAd = async (e) => {
        e.preventDefault();
        const formEl = document.forms.adStoreForm;
        const formData = new FormData(formEl);
        formData.append('ad_category', adCategoryId)
        formData.append('ad_sub_category', subCategoryId)
        formData.append('division', divisionId)
        formData.append('district', districtId)
        formData.append('user', profileData?.id)

        if (firstImageStore != false) {
            formData.append('image_1', firstImageStore)
        }

        if(firstImagePreview){
            setFirstImageCheck('')
        }else{
            setFirstImageCheck('true')
            firstImageRequried.current.scrollIntoView()
            return;
        }
        if (secondImageStore != false) {
            formData.append('image_2', secondImageStore)
        }
        if (thirdImageStore != false) {
            formData.append('image_3', thirdImageStore)
        }
        if (forthImageStore != false) {
            formData.append('image_4', forthImageStore)
        }
        if (fiveImageStore != false) {
            formData.append('image_5', fiveImageStore)
        }

        dispatch(postAdUpdateAction(formData, getAdEdit?.id, navigate))
    }

    const formHandle = () => {}

    const CheckAdvertisementVisible = () => {
        setCheckAdvertisementVisible(!checkAdvertisementVisible)
    }

    return (
        <>
            <Header/>
            <section className="dashboard_page pt-70 pb-120">
                <div className="container card__space">
                    <div className="row mt-70 shadow-none p-3 mb-5 bg-white rounded">

                        <div className="col-lg-12 m-auto">
                            <div className="row">
                                <div className="col-md-12 col-lx-6 col-sm-12 col-lg-6">
                                    <h5>{languageCheck() === 'bn' ? 'বিস্তারিত তথ্য দিন' : "Fill in the details"}</h5>
                                </div>


                                <div className="col-md-12 col-lx-6 col-sm-12 col-lg-6 category__location__select">

                                    <div className="row">
                                        <div className="col-md-6">
                                          <div className="change__option d-flex">
                                        <h5 className="mr-3">
                                            <i className="fas fa-location"></i> {' '}{districtName}</h5>
                                        <a href="/ad/post" data-bs-toggle="modal"
                                           data-bs-target="#all__loacation">{languageCheck() === 'bn' ? 'পরিবর্তন' : "Change"}</a>
                                        </div>   
                                        </div>
                                        <div className="col-md-6">
                                           <div className="change__option d-flex"
                                            style={{justifyContent: "end"}}>
                                           <div className="change__option d-flex">
                                            <h5 className="mr-3">
                                                <i className="fas fa-location"></i> {' '}{subCategoryName}</h5>
                                            <a href="/ad/post"
                                               data-bs-toggle="modal" onClick={adCategoryBtn}
                                               data-bs-target="#ad__category"
                                            >{languageCheck() === 'bn' ? 'পরিবর্তন' : "Change"}</a>
                                             </div>
                                          </div>
                                        </div>
                                    </div>
                                   

                                 
                                </div>
                            </div>

                            <hr/>
                            <div className="row mt-3">
                                <div className="col-md-6 m-auto">
                                    <h5>{languageCheck() === 'bn' ? 'বিজ্ঞাপন সম্পর্কে' : "About the ad"}</h5>
                                </div>
                            </div>
                            <form onSubmit={submitAd} id="adStoreForm">
                                <div className="row mt-3">
                                    <div className="col-md-6 m-auto">

                                        <div className="form-group">
                                            <label htmlFor="title" className="control-label"> 
                                            {languageCheck() === 'bn' ? 'শিরোনাম/ পণ্যের নাম' : "Title/ Product Name"}
                                            </label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                name="title"
                                                id="title"
                                                defaultValue={getAdEdit?.title}
                                                onChange={formHandle}
                                                placeholder={languageCheck() === 'bn' ? 'শিরোনাম/ পণ্যের নাম' : "Title/ Product Name"}
                                            />
                                        </div> 

                                        <hr/>
                                        <div className="row d-flex align-items-center">
                                            <div className="unCommonFields">
                                                {subCategories.map((subCategory) => (

                                                    subCategory?.name === subCategoryId ?
                                                        subCategory['un-common-field'].map((field, index) => (
                                                            Object.keys(field).map(function (key, index2) {

                                                                const inputFieldType = key.split(" ")[1];
                                                                const inputFieldLavelName = key.split("LName")[1];

                                                                var unCommonFieldsColumns = '';
                                                                if (getAdEdit?.uncommon_fields_json) {
                                                                    unCommonFieldsColumns = getAdEdit?.uncommon_fields_json

                                                                    if (inputFieldType === 'select') {
                                                                        return <EditSelectField
                                                                            key={index2 + index}
                                                                            dataBaseOptions={unCommonFieldsColumns}
                                                                            LName={inputFieldLavelName}
                                                                            options={field[key]}
                                                                        />
                                                                    }
                                                                    if (inputFieldType === 'text') {
                                                                        return <EditTextField
                                                                            key={index2 + index}
                                                                            dataBaseOptions={unCommonFieldsColumns}
                                                                            LName={inputFieldLavelName}
                                                                        />
                                                                    }
                                                                    if (inputFieldType === 'textaria') {
                                                                        return <EditTextAria
                                                                            key={index2 + index}
                                                                            dataBaseOptions={unCommonFieldsColumns}
                                                                            LName={inputFieldLavelName}
                                                                        />
                                                                    }
                                                                    if (inputFieldType === 'radio') {
                                                                        return <EditRadio
                                                                            key={index2 + index}
                                                                            dataBaseOptions={unCommonFieldsColumns}
                                                                            LName={inputFieldLavelName}
                                                                            options={field[key]}
                                                                        />
                                                                    }
                                                                }
                                                            }))
                                                        )
                                                        : ''
                                                ))}
                                            </div>
                                        </div>
                                        <hr/>



                                    {/* pricing  */}
  
                                        <div className="row d-flex align-items-center">
                                            <div className="col-7">
                                                <div className="form-group">
                                                    <label htmlFor="price" className="control-label">
                                                    {languageCheck() === 'bn' ? 'মূল্য (টাকা)' : "Price (TK)"}
                                                    </label>
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        name="price"
                                                        defaultValue={getAdEdit?.price}
                                                        onChange={formHandle}
                                                        placeholder={languageCheck() === 'bn' ? 'মূল্য (টাকা)' : "Price (TK)"}
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-5">
                                                {/*<input*/}
                                                {/*    name="is_price_on_call"*/}
                                                {/*    type="checkbox"*/}
                                                {/*    style={{display: 'none'}}*/}
                                                {/*    id="is_price_on_callOption"*/}
                                                {/*    checked={isPriceOnCall === false ? true : false}*/}
                                                {/*/>*/}
                                                <div className="form-group mt-4">
                                                    <div className="work_experiences d-flex w-100">
                                                        <div className="form-check mt-1">
                                                            <input
                                                                name="is_price_on_call"
                                                                type="checkbox"
                                                                style={{display: 'none'}}
                                                                id="is_price_on_call"
                                                                checked={isPriceOnCall}
                                                                onChange={(e) => setIsPriceOnCall(e.target.checked)}
                                                            />
                                                            <label htmlFor="is_price_on_call">
                                                            {languageCheck() === 'bn' ? 'মূল্যের জন্য কল' : "Call on price"} 
                                                            </label>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>




                                       

                                        <div className="row d-flex align-items-center">

                                            <div className="form-group">
                                                <label htmlFor="address" className="control-label">
                                                {languageCheck() === 'bn' ? 'আপনার সংক্ষিপ্ত ঠিকানা' : "Your Short Address"} 
                                                </label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    name="address"
                                                    id="address"
                                                    defaultValue={getAdEdit?.address}
                                                    onChange={formHandle}
                                                    placeholder={languageCheck() === 'bn' ? 'আপনার সংক্ষিপ্ত ঠিকানা' : "Your Short Address"}
                                                />
                                            </div>

                                            <div
                                                className={
                                                (noConditionCategoryList.includes(adCategoryName) === true 
                                                || noConditionSubCategoryList.includes(subCategoryName) === true) ?
                                                "d-none" :"form-group d-flex"
                                                } >
                                                <label htmlFor="cover_letter" className="control-label mr-2"> 
                                                {languageCheck() === 'bn' ? 'শর্ত' : "Condition"}       
                                                 </label> 
                                                <div className="radio__no mr-2">
                                                    <label htmlFor="new" className="mr-2">
                                                        <input
                                                            type="radio"
                                                            name="condition"
                                                            id="new"
                                                            checked={conditionCheck === "New"} value="New"
                                                            onChange={(e) => setConditionCheck(e.target.value)}
                                                        />

                                                    </label>
                                                    <span> {languageCheck() === 'bn' ? 'নতুন' : "New"}</span>
                                                </div>

                                                <div className={newConditionCategoryList.includes(adCategoryName) === true ? "d-none" : "radio__no mr-2"}>
                                                    <label htmlFor="secondhand" className="mr-2">
                                                        <input
                                                            value="Used"
                                                            type="radio"
                                                            name="condition"
                                                            id="secondhand"
                                                            checked={conditionCheck === "Used"}
                                                            onChange={(e) => setConditionCheck(e.target.value)}

                                                        />
                                                    </label>
                                                    <span> {languageCheck() === 'bn' ? 'ব্যবহৃত' : "Used"}</span>
                                                </div>

                                                <div className={reConditionSubCategoryList.includes(subCategoryName) 
                                                    === true ? "radio__no mr-2" : "d-none"}>
                                                    <label htmlFor="recondition" className="mr-2">
                                                        <input value="ReCondition" type="radio"
                                                               name="condition" id="recondition"/>
                                                    </label>
                                                    <span>{languageCheck() === 'bn' ? 'রিকন্ডিশন' : "ReCondiction"}</span>
                                                </div>
 

                                            </div>

                                            <div ref={firstImageRequried} className="form-group">
                                                <div className="form-group mt-2">
                                                    <div className="work_experiences d-flex w-100">
                                                        <div style={{paddingLeft: "0"}} className="form-check">
                                                            <input
                                                                type="checkbox"
                                                                style={{display: 'none'}}
                                                                id="advertisement_dateline_check"
                                                                onChange={formHandle}
                                                            />
                                                            <label htmlFor="advertisement_dateline_check">
                                                            {languageCheck() === 'bn' ? 'আপনার বিজ্ঞাপন পোস্ট করার সময় থেকে 30 দিনের জন্য বিজ্ঞাপন দৃশ্যমান' : "Advertisement visible for 30 days from your Ads posting time"}
                                                            
                                                            </label>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className={"form-group"}>
                                                <h5 className={'mb-3'}> {languageCheck() === 'bn' ? '5 টি পর্যন্ত ফটো যোগ করুন' : "Add up to 5 photos"}</h5>
                                                <div className="d-flex justify-content-start ad__image__all__show">
                                                    {/*image 1*/}

                                                    <div
                                                        className="image-upload-section d-flex flex-column justify-content-start mr-2">
                                                        <span style={{fontSize: '10px'}} id={firstImageCheck}
                                                              className={firstImageCheck === 'true' ? 'text-danger' : 'd-none'}>
                                                                  {languageCheck() === 'bn' ? 'অবশ্যই এই ইমেজ প্রয়োজন' : "This Image Required"}
                                                              </span>
                                                        <div className="d-flex justify-content-start">
                                                            <label
                                                                className={firstImagePreview === false ? 'border border-1 border-danger d-flex justify-content-center text-center align-items-center' : ''}
                                                                style={{height: '90px', width: '90px'}}>
                                                                <span style={{fontSize: "12px", color: "red"}}
                                                                      className={firstImagePreview === false ? 'd-flex flex-column align-items-center' : 'd-none'}>
                                                                    <svg style={{fill: "red", width: '30px'}}
                                                                         viewBox="0 0 24 24"
                                                                         className="svg-wrapper--8ky9e">
                                                                        <path
                                                                            d="M19.4 17.44l-2.1-6.76-2.45 1.5-1.5-3.7-4 6.45-1.15-1.71-4.08 4.22 15.18-.05zM7.47 9.53A1.44 1.44 0 1 1 6 8.05a1.46 1.46 0 0 1 1.47 1.48zM2.93 5.08h18.14v13.84H2.93zM1.5 20.4h21V3.6h-21z"
                                                                            fillRule="evenodd">
                                                                        </path>
                                                                    </svg>
                                                                    {languageCheck() === 'bn' ? 'একটি ছবি যোগ করুন' : "Add a photo"}
                                                                </span>
                                                                <div
                                                                    className={firstImagePreview === false ? 'd-none' : 'd-flex flex-row align-items-start'}
                                                                    style={{height: '90px', width: '90px'}}>
                                                                    <img
                                                                        src={firstImagePreview === false ? '' : firstImagePreview}
                                                                        style={{height: '100%', width: '100%'}}/>
                                                                </div>
                                                                <input id="image1" style={{display: "none"}}
                                                                       onChange={(e) => {
                                                                           setFirstImageStore(e.target.files[0]);
                                                                           setFirstImagePreview(URL.createObjectURL(e.target.files[0]))
                                                                       }} type="file"
                                                                       accept="image/*"/>
                                                            </label>
                                                            <span
                                                                className={firstImagePreview === false ? 'd-none' : 'd-flex align-items-center justify-content-center h2'}
                                                                onClick={(e) => {
                                                                    setFirstImagePreview(false);
                                                                    setFirstImageStore(false);
                                                                    document.getElementById("image1").value = null
                                                                }}
                                                                style={{
                                                                    cursor: 'pointer',
                                                                    color: '#fff',
                                                                    background: 'red',
                                                                    borderRadius: '50px',
                                                                    height: '17px',
                                                                    width: '17px',
                                                                    marginLeft: '-29px',
                                                                    marginTop: '9px',
                                                                    fontSize: '22px',
                                                                    fontWeight: 'bold'
                                                                }}>-</span>
                                                        </div>

                                                    </div>

                                                    {/*image 2*/}
                                                    <div
                                                        className="image-upload-section d-flex justify-content-start mx-2">
                                                        <label
                                                            className={secondImagePreview === false ? 'border border-1 border-danger d-flex justify-content-center text-center align-items-center' : ''}
                                                            style={{height: '90px', width: '90px'}}>
                                                                <span style={{fontSize: "12px", color: "red"}}
                                                                      className={secondImagePreview === false ? 'd-flex flex-column align-items-center' : 'd-none'}>
                                                                    <svg style={{fill: "red", width: '30px'}}
                                                                         viewBox="0 0 24 24"
                                                                         className="svg-wrapper--8ky9e">
                                                                        <path
                                                                            d="M19.4 17.44l-2.1-6.76-2.45 1.5-1.5-3.7-4 6.45-1.15-1.71-4.08 4.22 15.18-.05zM7.47 9.53A1.44 1.44 0 1 1 6 8.05a1.46 1.46 0 0 1 1.47 1.48zM2.93 5.08h18.14v13.84H2.93zM1.5 20.4h21V3.6h-21z"
                                                                            fillRule="evenodd">
                                                                        </path>
                                                                    </svg>
                                                                    {languageCheck() === 'bn' ? 'একটি ছবি যোগ করুন' : "Add a photo"}
                                                                </span>
                                                            <div
                                                                className={secondImagePreview === false ? 'd-none' : 'd-flex flex-row align-items-start'}
                                                                style={{height: '90px', width: '90px'}}>
                                                                <img
                                                                    src={secondImagePreview === false ? '' : secondImagePreview}
                                                                    style={{height: '100%', width: '100%'}}/>
                                                            </div>
                                                            <input id="image2" style={{display: "none"}}
                                                                   onChange={(e) => {
                                                                       setSecondImageStore(e.target.files[0]);
                                                                       setSecondImagePreview(URL.createObjectURL(e.target.files[0]))
                                                                   }} type="file"
                                                                   accept="image/*"/>
                                                        </label>
                                                        <span
                                                            className={secondImagePreview === false ? 'd-none' : 'd-flex align-items-center justify-content-center h2'}
                                                            onClick={(e) => {
                                                                setSecondImagePreview(false);
                                                                setSecondImageStore(false);
                                                                document.getElementById("image2").value = null
                                                            }}
                                                            style={{
                                                                cursor: 'pointer',
                                                                color: '#fff',
                                                                background: 'red',
                                                                borderRadius: '50px',
                                                                height: '17px',
                                                                width: '17px',
                                                                marginLeft: '-29px',
                                                                marginTop: '9px',
                                                                fontSize: '22px',
                                                                fontWeight: 'bold'
                                                            }}>-</span>
                                                    </div>
                                                    {/*image 3*/}
                                                    <div
                                                        className="image-upload-section d-flex justify-content-start mx-2">
                                                        <label
                                                            className={thirdImagePreview === false ? 'border border-1 border-danger d-flex justify-content-center text-center align-items-center' : ''}
                                                            style={{height: '90px', width: '90px'}}>
                                                                <span style={{fontSize: "12px", color: "red"}}
                                                                      className={thirdImagePreview === false ? 'd-flex flex-column align-items-center' : 'd-none'}>
                                                                    <svg style={{fill: "red", width: '30px'}}
                                                                         viewBox="0 0 24 24"
                                                                         className="svg-wrapper--8ky9e">
                                                                        <path
                                                                            d="M19.4 17.44l-2.1-6.76-2.45 1.5-1.5-3.7-4 6.45-1.15-1.71-4.08 4.22 15.18-.05zM7.47 9.53A1.44 1.44 0 1 1 6 8.05a1.46 1.46 0 0 1 1.47 1.48zM2.93 5.08h18.14v13.84H2.93zM1.5 20.4h21V3.6h-21z"
                                                                            fillRule="evenodd">
                                                                        </path>
                                                                    </svg>
                                                                    {languageCheck() === 'bn' ? 'একটি ছবি যোগ করুন' : "Add a photo"}
                                                                </span>
                                                            <div
                                                                className={thirdImagePreview === false ? 'd-none' : 'd-flex flex-row align-items-start'}
                                                                style={{height: '90px', width: '90px'}}>
                                                                <img
                                                                    src={thirdImagePreview === false ? '' : thirdImagePreview}
                                                                    style={{height: '100%', width: '100%'}}/>
                                                            </div>
                                                            <input id="image3" style={{display: "none"}}
                                                                   onChange={(e) => {
                                                                       setThirdImageStore(e.target.files[0]);
                                                                       setThirdImagePreview(URL.createObjectURL(e.target.files[0]))
                                                                   }} type="file"
                                                                   accept="image/*"/>
                                                        </label>
                                                        <span
                                                            className={thirdImagePreview === false ? 'd-none' : 'd-flex align-items-center justify-content-center h2'}
                                                            onClick={(e) => {
                                                                setThirdImagePreview(false);
                                                                setThirdImageStore(false);
                                                                document.getElementById("image3").value = null
                                                            }}
                                                            style={{
                                                                cursor: 'pointer',
                                                                color: '#fff',
                                                                background: 'red',
                                                                borderRadius: '50px',
                                                                height: '17px',
                                                                width: '17px',
                                                                marginLeft: '-29px',
                                                                marginTop: '9px',
                                                                fontSize: '22px',
                                                                fontWeight: 'bold'
                                                            }}>-</span>
                                                    </div>

                                                    {/*image 4*/}
                                                    <div
                                                        className="image-upload-section d-flex justify-content-start mx-2">
                                                        <label
                                                            className={forthImagePreview === false ? 'border border-1 border-danger d-flex justify-content-center text-center align-items-center' : ''}
                                                            style={{height: '90px', width: '90px'}}>
                                                                <span style={{fontSize: "12px", color: "red"}}
                                                                      className={forthImagePreview === false ? 'd-flex flex-column align-items-center' : 'd-none'}>
                                                                    <svg style={{fill: "red", width: '30px'}}
                                                                         viewBox="0 0 24 24"
                                                                         className="svg-wrapper--8ky9e">
                                                                        <path
                                                                            d="M19.4 17.44l-2.1-6.76-2.45 1.5-1.5-3.7-4 6.45-1.15-1.71-4.08 4.22 15.18-.05zM7.47 9.53A1.44 1.44 0 1 1 6 8.05a1.46 1.46 0 0 1 1.47 1.48zM2.93 5.08h18.14v13.84H2.93zM1.5 20.4h21V3.6h-21z"
                                                                            fillRule="evenodd">
                                                                        </path>
                                                                    </svg>
                                                                    {languageCheck() === 'bn' ? 'একটি ছবি যোগ করুন' : "Add a photo"}
                                                                </span>
                                                            <div
                                                                className={forthImagePreview === false ? 'd-none' : 'd-flex flex-row align-items-start'}
                                                                style={{height: '90px', width: '90px'}}>
                                                                <img
                                                                    src={forthImagePreview === false ? '' : forthImagePreview}
                                                                    style={{height: '100%', width: '100%'}}/>
                                                            </div>
                                                            <input id="image4" style={{display: "none"}}
                                                                   onChange={(e) => {
                                                                       setForthImageStore(e.target.files[0]);
                                                                       setForthImagePreview(URL.createObjectURL(e.target.files[0]))
                                                                   }} type="file"
                                                                   accept="image/*"/>
                                                        </label>
                                                        <span
                                                            className={forthImagePreview === false ? 'd-none' : 'd-flex align-items-center justify-content-center h2'}
                                                            onClick={(e) => {
                                                                setForthImagePreview(false);
                                                                setForthImageStore(false);
                                                                document.getElementById("image4").value = null
                                                            }}
                                                            style={{
                                                                cursor: 'pointer',
                                                                color: '#fff',
                                                                background: 'red',
                                                                borderRadius: '50px',
                                                                height: '17px',
                                                                width: '17px',
                                                                marginLeft: '-29px',
                                                                marginTop: '9px',
                                                                fontSize: '22px',
                                                                fontWeight: 'bold'
                                                            }}>-</span>
                                                    </div>

                                                    {/*image 5*/}
                                                    <div
                                                        className="image-upload-section d-flex justify-content-start mx-2">
                                                        <label
                                                            className={fiveImagePreview === false ? 'border border-1 border-danger d-flex justify-content-center text-center align-items-center' : ''}
                                                            style={{height: '90px', width: '90px'}}>
                                                                <span style={{fontSize: "12px", color: "red"}}
                                                                      className={fiveImagePreview === false ? 'd-flex flex-column align-items-center' : 'd-none'}>
                                                                    <svg style={{fill: "red", width: '30px'}}
                                                                         viewBox="0 0 24 24"
                                                                         className="svg-wrapper--8ky9e">
                                                                        <path
                                                                            d="M19.4 17.44l-2.1-6.76-2.45 1.5-1.5-3.7-4 6.45-1.15-1.71-4.08 4.22 15.18-.05zM7.47 9.53A1.44 1.44 0 1 1 6 8.05a1.46 1.46 0 0 1 1.47 1.48zM2.93 5.08h18.14v13.84H2.93zM1.5 20.4h21V3.6h-21z"
                                                                            fillRule="evenodd">
                                                                        </path>
                                                                    </svg>
                                                                    {languageCheck() === 'bn' ? 'একটি ছবি যোগ করুন' : "Add a photo"}
                                                                </span>
                                                            <div
                                                                className={fiveImagePreview === false ? 'd-none' : 'd-flex flex-row align-items-start'}
                                                                style={{height: '90px', width: '90px'}}>
                                                                <img
                                                                    src={fiveImagePreview === false ? '' : fiveImagePreview}
                                                                    style={{height: '100%', width: '100%'}}/>
                                                            </div>
                                                            <input id="image5" style={{display: "none"}}
                                                                   onChange={(e) => {
                                                                       setFiveImageStore(e.target.files[0]);
                                                                       setFiveImagePreview(URL.createObjectURL(e.target.files[0]))
                                                                   }} type="file"
                                                                   accept="image/*"/>
                                                        </label>
                                                        <span
                                                            className={fiveImagePreview === false ? 'd-none' : 'd-flex align-items-center justify-content-center h2'}
                                                            onClick={(e) => {
                                                                setFiveImagePreview(false);
                                                                setFiveImageStore(false);
                                                                document.getElementById("image5").value = null
                                                            }}
                                                            style={{
                                                                cursor: 'pointer',
                                                                color: '#fff',
                                                                background: 'red',
                                                                borderRadius: '50px',
                                                                height: '17px',
                                                                width: '17px',
                                                                marginLeft: '-29px',
                                                                marginTop: '9px',
                                                                fontSize: '22px',
                                                                fontWeight: 'bold'
                                                            }}>-</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="row d-flex align-items-center">

                                            <h5 className="mb-2">
                                            {languageCheck() === 'bn' ? 'যোগাযোগের ঠিকানা' : "Contact details"}
                                            </h5>
                                            <div className="col-sm-12">
                                                <div className="form-group">
                                                    <label htmlFor="name">
                                                    {languageCheck() === 'bn' ? 'নাম' : "Name"}
                                                    </label>
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        value={profileData?.name}
                                                        readOnly
                                                    />
                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor="email">
                                                    {languageCheck() === 'bn' ? 'ইমেইল' : "Email"}
                                                    </label>
                                                    <input
                                                        type="email"
                                                        className="form-control"
                                                        value={profileData?.email}
                                                        readOnly
                                                    />
                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor="phone">
                                                    {languageCheck() === 'bn' ? 'ফোন নম্বর' : "Phone Number"}
                                                    </label>
                                                    <input
                                                    type="text" 
                                                    className="form-control" 
                                                    value={profileData?.phone_number}
                                                    readOnly
                                                    />
                                                </div> 
                                                <div className="form-group">
                                                    <label htmlFor="contact_number">
                                                    {languageCheck() === 'bn' ? 'অন্য যোগাযোগ ফোন যোগ করুন সংখ্যা' : "Add Another Contact Phone Number"} 
                                                    </label>
                                                    <input
                                                        type="text"
                                                        className="form-control" 
                                                        pattern="(^(\+88|0088)?(01){1}[3456789]{1}(\d){8})"
                                                        defaultValue={getAdEdit?.contact_number}
                                                        name="contact_number"
                                                        onChange={formHandle} 
                                                        placeholder={languageCheck() === 'bn' ? 'অন্য যোগাযোগ ফোন যোগ করুন সংখ্যা' : "Add Another Contact Phone Number"} 
                                                    />
                                                </div>

                                                <div className="form-group mt-4">
                                                    <input
                                                        name="is_show_contact_number"
                                                        type="checkbox"
                                                        style={{display: 'none'}}
                                                        id="is_show_contact_numberOption"
                                                        checked={true}
                                                        value="false"
                                                    />
                                                    <div className="work_experiences d-flex w-100">
                                                        <div className="form-check mt-1">
                                                            <input
                                                            name="is_show_contact_number"
                                                            type="checkbox"
                                                            style={{display: 'none'}}
                                                            id="is_show_contact_number"
                                                            checked={isShowContact}
                                                            onChange={(e) => setIsShowContact(e.target.checked)}
                                                            />
                                                             <label htmlFor="is_show_contact_number">
                                                               {languageCheck() === 'bn' ? 'যোগাযোগ নম্বর দেখান' : "Show contact number"}
                                                            </label>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>


                                            <div className="login__btn">
                                                <button type="submit"
                                                        className={checkAdvertisementVisible === true ? 'main-btn' : 'main-btn btn__small'}>
                                                   {languageCheck() === 'bn' ? 'এডিট করুন':"Edit"}
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
            <AdCategoryModal
                adCategorySelect={adCategorySelect}
                categoryParam={categoryParam}
                categoryParamRoute={categoryParamRoute}
                adCategorySave={adCategorySave}
            />

            <DivisionAndDistrictModal locationRoute={locationRoute}/>
            <Footer/>
        </>
    );
};

export default AdEdit;
