export type Publication = {
  authors: string;
  title: string;
  journal: string;
  year: number;
  doi?: string;
  impactFactor?: string;
  publisher?: string;
};

export type ConferenceProceeding = {
  authors: string;
  title: string;
  conference: string;
  location?: string;
  date: string;
  note?: string;
};

export type Book = {
  authors: string;
  title: string;
  publisher: string;
  year: number;
  pages?: string;
};

export type BookChapter = {
  authors: string;
  title: string;
  bookTitle: string;
  publisher: string;
  year: number;
  isbn?: string;
  doi?: string;
};

export type TechnicalReport = {
  authors: string;
  title: string;
  report: string;
  institution: string;
  year: number;
};

export const highlights = [
  { value: '55+', label: 'Peer-Reviewed Papers' },
  { value: '90+', label: 'Conference Proceedings' },
  { value: '03', label: 'Authored Books' },
  { value: '13', label: 'Book Chapters' },
  { value: '50+', label: 'Technical Reports' },
];

export const peerReviewedPapers: Publication[] = [
  {
    authors: 'Ramachandra, T.V., Vinay, S., Asulabha, K.S., Sincy, V., Bharath, S., Bharath, H.A.',
    title: 'Appraisal of Environmental Health and Ecohydrology of Free-Flowing Aghanashini River, Karnataka, India.',
    journal: 'Water, 14, 977',
    year: 2022,
    doi: 'https://doi.org/10.3390/w14060977',
    impactFactor: '3.103',
    publisher: 'MDPI',
  },
  {
    authors: 'Bharath, H.A., Prakash, P.S.',
    title: 'Building footprint extraction from very high-resolution satellite images using Deep learning.',
    journal: 'Journal of Spatial Science',
    year: 2022,
    doi: 'https://doi.org/10.1080/14498596.2022.2037473',
    impactFactor: '1.981',
    publisher: 'Taylor and Francis',
  },
  {
    authors: 'Prakash, P.S., Bharath, H.A.',
    title: 'Digital building height preparation from satellite stereo images.',
    journal: 'Photogrammetric Engineering & Remote Sensing, 87(8), 557–566',
    year: 2021,
    doi: 'https://doi.org/10.14358/PERS.87.8.557',
    impactFactor: '3.964',
    publisher: 'ASPRS',
  },
  {
    authors: 'Aishwarya, N., Vinay, S., Bharath, H.A., Sutapa, D.',
    title: 'Multi-dimensional parametric coastal flood risk assessment at a regional scale using GIS.',
    journal: 'Environment, Development and Sustainability',
    year: 2021,
    doi: 'https://doi.org/10.1007/s10668-021-01839-6',
    impactFactor: '3.219',
    publisher: 'Springer',
  },
  {
    authors: 'Vinay, S., Aishwarya, N., Bharath, H.A.',
    title: 'Forecasting and Evaluation of Impacts and Risk Due to Tidal Anomalies on a Coastal Island.',
    journal: 'Indian Journal of Remote Sensing',
    year: 2021,
    doi: 'https://doi.org/10.1007/s12524-021-01458-8',
    impactFactor: '2.728',
    publisher: 'Springer',
  },
  {
    authors: 'Chandan, M.C., Bharath, H.A.',
    title: 'Impact assessment of Corridor Oriented development: A case of urban agglomerations of India.',
    journal: 'International Review for Spatial Planning and Sustainable Development, 9, 172–194',
    year: 2021,
    doi: 'https://doi.org/10.14246/irspsdc.9.2_172',
    impactFactor: '0.227',
    publisher: 'J-STAGE',
  },
  {
    authors: 'Prakash, P.S., Bharath, H.A., Satrupa, M.',
    title: 'Automatic Extraction of Buildings from UAV based Imagery Using Artificial Neural Networks.',
    journal: 'Journal of the Indian Society of Remote Sensing, 49, 681–687',
    year: 2020,
    doi: 'https://doi.org/10.1007/s12524-020-01235-z',
    impactFactor: '2.728',
    publisher: 'Springer',
  },
  {
    authors: 'Ramachandra, T.V., Bharath, S., Bharath, H.A.',
    title: 'Insights of Forest Dynamics for the Regional Ecological Fragility Assessment.',
    journal: 'Journal of the Indian Society of Remote Sensing, 48, 1169–1189',
    year: 2020,
    doi: 'https://doi.org/10.1007/s12524-020-01146-z',
    impactFactor: '2.728',
    publisher: 'Springer',
  },
  {
    authors: 'Bharath, H.A., Soumya, K.D., Prakash, P.S.',
    title: 'Urban 3D structure reconstruction through a generative adversarial network model.',
    journal: 'Arabian Journal of Science and Engineering, 45, 10731–10741',
    year: 2020,
    doi: 'https://doi.org/10.1007/s13369-020-04850-7',
    impactFactor: '2.334',
    publisher: 'Springer',
  },
  {
    authors: 'Bharath, H.A., Chandan, M.C., Vinay, S., Akshith, S.',
    title: 'Land allocation model using Cellular Automata to understand housing demand and supply.',
    journal: 'Spatial Information Research',
    year: 2020,
    doi: 'https://doi.org/10.1007/s41324-020-00350-w',
    impactFactor: '0.81',
    publisher: 'Springer',
  },
  {
    authors: 'Sutapa, D., Tanaya, S., Aishwarya, N., Bharath, H.A.',
    title: 'Assessing human vulnerability to urban flood hazard using the Analytic Hierarchy Process and Geographic Information System.',
    journal: 'International Journal of Disaster Risk Reduction, 50, 101659',
    year: 2020,
    doi: 'https://doi.org/10.1016/j.ijdrr.2020.101659',
    impactFactor: '4.32',
    publisher: 'Elsevier',
  },
  {
    authors: 'Aishwarya, N., Sutapa, D., Vinay, S., Bharath, H.A.',
    title: 'Adaptive Capacity Assessment for A Flood Vulnerable Region through Land Use Modelling and Socio Economic and Physical Indicators.',
    journal: 'Journal of Environmental Informatics Letters 3(2), 107–119',
    year: 2020,
    doi: 'https://doi.org/10.3808/jeil.202000031',
    publisher: 'Elsevier',
  },
  {
    authors: 'Prakash, P.S., Bharath, H.A.',
    title: 'Retrieval of Building Roofs using High-Resolution Satellite Imagery through Machine Learning Approach.',
    journal: 'Malaysian Journal of Remote Sensing & GIS, 9(1), 1–15',
    year: 2020,
  },
  {
    authors: 'Nimish, G., Bharath, H.A., Lalitha, A.',
    title: 'Exploring temperature indices by deriving relationship between land surface temperature and urban landscape.',
    journal: 'Remote Sensing Applications: Society and Environment, p.100299',
    year: 2020,
    doi: 'https://doi.org/10.1016/j.rsase.2020.100299',
    impactFactor: '1.474',
    publisher: 'Elsevier',
  },
  {
    authors: 'Ramachandra, T.V., Vinay, S., Bharath, S., Subhash Chandran, M.D., Bharath, H.A.',
    title: 'Insights into riverscape dynamics with the hydrological, ecological and social dimensions for water sustenance.',
    journal: 'Current Science, 118(9), 1379–1389',
    year: 2020,
    impactFactor: '0.767',
  },
  {
    authors: 'Ramachandra, T.V., Jeffery M.S., Bharath, H.A., Bharath, S.',
    title: 'Micro level analyses of environmentally disastrous urbanisation in Bangalore.',
    journal: 'Environmental Monitoring and Assessment, 191(3), 787',
    year: 2019,
    doi: 'https://doi.org/10.1007/s10661-019-7693-8',
    impactFactor: '2.513',
    publisher: 'Springer',
  },
  {
    authors: 'Ramachandra, T.V., Jeffery M.S., Bharath, H.A., Vinay, S.',
    title: 'Geo-visualisation of landscape dynamics in the proposed mega industrial corridor.',
    journal: 'Environmental Monitoring and Assessment, 191(3), 788',
    year: 2019,
    doi: 'https://doi.org/10.1007/s10661-019-7701-z',
    impactFactor: '2.273',
    publisher: 'Springer',
  },
  {
    authors: 'Ramachandra, T.V., Rakhi, K.R., Bharath, H.A.',
    title: 'Valuation of Aghanashini Estuarine Ecosystem Goods and Services.',
    journal: 'Journal of Biodiversity, 10(2), 45–58',
    year: 2019,
  },
  {
    authors: 'Ramachandra, T.V., Sudharshan, B., Gouri, K., Bharath, H.A.',
    title: 'Assessment of Forest Dynamics in Chikkamagalur District, Central Western Ghats using Temporal Remote Sensing Data and Spatial Metrics.',
    journal: 'Indian Forester, 145(8), 757–767',
    year: 2019,
    impactFactor: '0.67',
  },
  {
    authors: 'Bharath, H.A., Chandan, M.C., Nimish, G.',
    title: 'Assessing land surface temperature and land use change through spatio-temporal analysis: a case study of select major cities of India.',
    journal: 'Arabian Journal of GeoSciences, 12:367',
    year: 2019,
    doi: 'https://doi.org/10.1007/s12517-019-4547-1',
    impactFactor: '1.827',
    publisher: 'Springer',
  },
  {
    authors: 'Chandan, M.C., Nimish, G., Bharath, H.A.',
    title: 'Analysing Spatial Patterns and Trend of Future Urban Expansion Using SLEUTH.',
    journal: 'Spatial Information Research, 28(1), 11–23',
    year: 2019,
    doi: 'https://doi.org/10.1007/s41324-019-00262-4',
    impactFactor: '0.81',
    publisher: 'Springer',
  },
  {
    authors: 'Bharath, H.A., Chandan, M.C., Vinay, S., Ramachandra, T.V.',
    title: 'Modelling urban dynamics in rapidly urbanising Indian cities.',
    journal: 'The Egyptian Journal of Remote Sensing and Space Science, 21(3), 201–210',
    year: 2018,
    doi: 'https://doi.org/10.1016/j.ejrs.2017.08.002',
    impactFactor: '5.188',
    publisher: 'Elsevier',
  },
  {
    authors: 'Sowmya, K.D., Prakash, P.S., Bharath, H.A.',
    title: 'Automated Building Extraction using High-Resolution Satellite Imagery through Ensemble Modelling and Machine Learning.',
    journal: 'Remote Sensing of Land, 1(1), 1122–1136',
    year: 2018,
  },
  {
    authors: 'Ramachandra, T.V., Jeffery M.S., Bharath, H.A., Vinay, S.',
    title: 'Modeling urban dynamics along two major industrial corridors in India.',
    journal: 'Spatial Information Research, 27, 37–48',
    year: 2018,
    doi: 'https://doi.org/10.1007/s41324-018-0217-8',
    impactFactor: '0.81',
    publisher: 'Springer',
  },
  {
    authors: 'Bharath, H.A., Vinay, S., Ramachandra, T.V.',
    title: 'Simulating urban growth by two state modelling and connected network.',
    journal: 'Modeling Earth Systems and Environment, 4(4), 1297–1308',
    year: 2018,
    doi: 'https://doi.org/10.1007/s40808-018-0506-1',
    publisher: 'Springer',
  },
  {
    authors: 'Ramachandra, T.V., Gouri, K., Vishnu, B., Bharath, H.A., Han, S.S.',
    title: 'Municipal Solid Waste: Generation, Composition and GHG Emissions in Bangalore, India.',
    journal: 'Renewable and Sustainable Energy Reviews, 82(1), 1122–1136',
    year: 2018,
    doi: 'https://doi.org/10.1016/j.rser.2017.09.085',
    impactFactor: '14.982',
    publisher: 'Elsevier',
  },
  {
    authors: 'Bharath, H.A., Chandan, M.C., Vinay, S., Gouri, H.A., Ramachandra, T.V.',
    title: 'Green to gray: Silicon Valley of India.',
    journal: 'Journal of Environmental Management, 206, 1286–1295',
    year: 2018,
    doi: 'https://doi.org/10.1016/j.jenvman.2017.06.072',
    impactFactor: '6.789',
    publisher: 'Elsevier',
  },
  {
    authors: 'Bharath, H.A., Chandan, M.C., Vinay, S., Ramachandra, T.V.',
    title: 'Modelling the growth of two rapidly urbanizing Indian Cities.',
    journal: 'Journal of Geomatics, 11(2), 28–46',
    year: 2017,
    impactFactor: '1.249',
    publisher: 'ISG',
  },
  {
    authors: 'Bharath, H.A., Vinay, S., Ramachandra, T.V.',
    title: 'Characterization and visualization of Spatial Patterns of Urbanisation and Sprawl through metrics and modelling.',
    journal: 'Cities and the Environment (CATE), 10(1), 1–10',
    year: 2017,
  },
  {
    authors: 'Bharath, H.A., Chandan, M.C., Vinay, S., Ramachandra, T.V.',
    title: 'Intra and Inter Spatio-Temporal Patterns of Urbanisation in Indian Megacities.',
    journal: 'International Journal of Imaging and Robotics, 17(2), 28–39',
    year: 2017,
    impactFactor: '0.86',
  },
  {
    authors: 'Ramachandra, T.V., Vishnu, B., Gouri, K., Bharath, H.A., Han, S.S.',
    title: 'Economic disparity and CO2 emissions: The domestic energy sector in Greater Bangalore, India.',
    journal: 'Renewable and Sustainable Energy Reviews, 67, 1331–1344',
    year: 2017,
    doi: 'https://doi.org/10.1016/j.rser.2016.09.038',
    impactFactor: '14.982',
    publisher: 'Elsevier',
  },
  {
    authors: 'Bharath, H.A., Ramachandra, T.V.',
    title: 'Modelling Urban Dynamics of Bhopal, India.',
    journal: 'Journal of Settlements and Spatial Planning, 7(1), 18–34',
    year: 2016,
  },
  {
    authors: 'Bharath, H.A., Ramachandra, T.V.',
    title: 'Visualization of Urban Growth in Chennai: spatio-temporal using Geoinformatics.',
    journal: 'Journal of the Indian Society of Remote Sensing, 44(4), 617–633',
    year: 2016,
    doi: 'https://doi.org/10.1007/s12524-015-0482-0',
    impactFactor: '2.728',
    publisher: 'Springer',
  },
  {
    authors: 'Ramachandra, T.V., Bharath, H.A., Sowmyashree, M.V.',
    title: 'Monitoring urbanization and its implications in a mega city from space: Spatiotemporal patterns and its indicators.',
    journal: 'Journal of Environmental Management, 148, 67–91',
    year: 2015,
    doi: 'https://doi.org/10.1016/j.jenvman.2014.02.015',
    impactFactor: '6.789',
    publisher: 'Elsevier',
  },
  {
    authors: 'Ramachandra, T.V., Bharath, H.A., Sowmyashree, M.V.',
    title: 'Urban Structure in Kolkata: Metrics and Modeling through Geo-informatics.',
    journal: 'Applied Geomatics, 6(4), 229–244',
    year: 2014,
    doi: 'https://doi.org/10.1007/s12518-014-0135-y',
    impactFactor: '1.249',
    publisher: 'Springer',
  },
  {
    authors: 'Ramachandra, T.V., Bharath, S., Bharath, H.A.',
    title: 'Spatio-temporal dynamics along the terrain gradient of diverse landscape.',
    journal: 'Journal of Environmental Engineering and Landscape Management, 22(1), 50–63',
    year: 2013,
    doi: 'https://doi.org/10.3846/16486897.2013.808639',
    impactFactor: '1.732',
    publisher: 'Taylor and Francis',
  },
  {
    authors: 'Ramachandra, T.V., Bharath, H.A., Sannadurgappa, D.',
    title: 'Insights to Urban Dynamics through Landscape Spatial Pattern Analysis.',
    journal: 'Journal of Applied Earth Observation and Geoinformation, 18, 329–343',
    year: 2012,
    doi: 'https://doi.org/10.1016/j.jag.2012.03.005',
    impactFactor: '5.933',
    publisher: 'Elsevier',
  },
  {
    authors: 'Ramachandra, T.V., Bharath, H.A., Kumar, U., Joshi, N.V.',
    title: 'Prediction of Shallow landslide prone regions in undulating terrain.',
    journal: 'Disaster Advances, 6(1), 53–63',
    year: 2013,
    impactFactor: '2.27',
  },
];

export const conferenceProceedings: ConferenceProceeding[] = [
  {
    authors: 'Madhumita, D., Bharath, H.A.',
    title: 'Semantic Segmentation of High-Resolution Satellite images: a Deep Learning Approach.',
    conference: 'ISG-ISRS National Symposium 2021',
    location: 'India',
    date: 'December 2021'
  },
  {
    authors: 'Nimish, G., Bharath., H.A.',
    title: 'Effects of rising urban temperatures on the residents – A case study of Kolkata Metropolitan Region.',
    conference: 'International Conference 2021 on Spatial Planning and Sustainable Development, Nanjing University',
    location: 'China',
    date: 'November 2021'
  },
  {
    authors: 'Vinay, S., Bharath, H.A.',
    title: 'Inundation Exposure Assessment of Coastal Island using High Resolution remote sensing data.',
    conference: '5th WCDM',
    location: 'Delhi, India',
    date: 'November 2021'
  },
  {
    authors: 'Aishwarya, N., Bharath, H.A.',
    title: 'Multivariate building damage model for scenario based flood risk assessment.',
    conference: 'FOSS4G 2021',
    location: 'Nepal',
    date: 'November 2021'
  },
  {
    authors: 'Prakash, P.S., Mansi, Bharath, H.A.',
    title: 'Experimentation with Generative Adversarial Networks for Building Extraction from a Very High-Resolution Remote Sensing Imageries.',
    conference: 'FOSS4G 2021',
    location: 'Nepal',
    date: 'November 2021'
  },
  {
    authors: 'Prakash, P.S., Mansi, Bharath, H.A.',
    title: 'Change detection in urban built-up volume using deep learning based segmentation techniques.',
    conference: 'SPIE Remote Sensing',
    date: 'September 2021'
  },
  {
    authors: 'Prakash, P.S., Bharath, H.A.',
    title: 'A Deep Learning Based Approach For Rooftop Solar Potential Estimation Of A City: A Case Study Of Indian Metropolis.',
    conference: 'IGARSS 2021',
    location: 'Brussels, Belgium',
    date: 'July 2021'
  },
  {
    authors: 'Vishal, S., Prakash, P.S., Bharath, H.A.',
    title: 'Deep learning-based building rooftop extraction and classification from remote sensing imagery.',
    conference: '17th International Conference on Computers in Urban Planning and Urban Management',
    location: 'Helsinki',
    date: 'June 2021'
  },
  {
    authors: 'Nishanth, G., Nimish, G., Bharath., H.A.',
    title: 'Deriving Relationship Between Urbanization and Land Surface Temperature.',
    conference: '16th International Conference on Computers in Urban Planning and Urban Management',
    location: 'Helsinki',
    date: 'June 2021'
  },
  {
    authors: 'Vinay, S., Bharath., H.A.',
    title: 'Flood risk forecasting for sustainable coastal management at regional scale.',
    conference: 'Spatial@ucsb.global2021: Spatial Data Science for a Sustainable Future',
    date: 'June 2021'
  },
  {
    authors: 'Madhumita, D., Bharath., H.A.',
    title: 'Review of Road Feature Extraction for Sustainable Mobility.',
    conference: 'Spatial@ucsb.global2021: Spatial Data Science for a Sustainable Future',
    date: 'June 2021'
  },
  {
    authors: 'Vinay, S., Bharath., H.A.',
    title: 'Multi-Criteria Decision Analysis of Coastal Inundation at Regional scale.',
    conference: 'EGU general assembly 2021',
    date: 'April 2021',
    note: 'https://doi.org/10.5194/egusphere-egu21-6963'
  },
  {
    authors: 'Aishwarya, N., Sutapa, D., Bharath., H.A.',
    title: 'Damage-cost assessment of vernacular buildings against coastal flooding.',
    conference: 'EGU 2021',
    date: 'April 2021',
    note: 'https://doi.org/10.5194/egusphere-egu21-829'
  },
  {
    authors: 'Prakash, P.S., Mansi, U., Bharath, H.A.',
    title: 'Deep Learning based architectures for semantic segmentation of aerial imagery.',
    conference: '2nd International Conference on Unmanned Aerial System in Geomatics - 2021',
    location: 'IIT Roorkee Delhi, India',
    date: 'April 2021'
  },
  {
    authors: 'Vinay, S., Bharath., H.A.',
    title: 'Role of local sea level rise on disaster exposure in Coastal Island.',
    conference: 'Lake 2020',
    location: 'India',
    date: 'December 2020'
  },
  {
    authors: 'Mohit, V., Chandan, M.C., Bharath., H.A.',
    title: 'Developing a Urban Web-Based Spatial Decision Support System (SDSS): a case study.',
    conference: 'Lake 2020',
    location: 'India',
    date: 'December 2020'
  },
  {
    authors: 'Vishal, S., Prakash, P.S., Bharath, H.A.',
    title: 'Solar Using Machine Learning.',
    conference: 'ISRSNS 2020',
    location: 'Gujarat, India',
    date: 'December 2020'
  },
  {
    authors: 'Prakash, P.S., Vishal, S., Bharath, H.A.',
    title: 'UAV Based Sensor Data for Efficient 3D Building Extraction Using Machine Learning.',
    conference: 'ISRSNS 2020',
    location: 'Gujarat, India',
    date: 'December 2020'
  },
  {
    authors: 'Abhimanyu, S., Chandan, M.C., Bharath., H.A.',
    title: 'Urban growth analysis and modelling based on socio-economic agents using Cellular Automata.',
    conference: 'INGARSS 2020',
    location: 'India',
    date: 'December 2020'
  },
  {
    authors: 'Nishanth, G., Nimish, G., Bharath., H.A.',
    title: 'Using FOSS to estimate the Land Surface Temperature.',
    conference: 'FOSS4G Korea 2020',
    location: 'Seoul',
    date: 'November 2020'
  },
  {
    authors: 'Chandan, M.C., Abhimanyu, S., Bharath., H.A.',
    title: 'Land Use Analysis and Modelling based on Agents using Cellular Automata.',
    conference: 'ACRS 2020',
    location: 'China',
    date: 'November 2020'
  },
  {
    authors: 'Aishwarya, N., Parul, S., Bharath., H.A.',
    title: 'A Parametric Approach For Coastal Flood Risks Assessment By Integrating Hazard Data And Micro-Level Aspects Of Rural Vulnerability: Case Of Sagar Island, West Bengal.',
    conference: 'ACRS 2020',
    location: 'China',
    date: 'November 2020'
  },
  {
    authors: 'Chandan, M.C., Bharath., H.A.',
    title: 'Integration of genetic algorithm and agent-based model to visualize near realistic sustainable urban growth: a comparative study.',
    conference: 'IGARSS 2020',
    location: 'USA',
    date: 'July 2020'
  },
  {
    authors: 'Nimish, G., Bharath., H.A.',
    title: 'Forecasting land surface temperature using artificial neural network.',
    conference: 'IGARSS 2020',
    location: 'USA',
    date: 'July 2020'
  },
  {
    authors: 'Prakash, P.S., Bharath, H.A.',
    title: 'Assessment of urban built-up volume using geospatial methods: a case study of Bangalore.',
    conference: 'IGARSS 2020',
    location: 'USA',
    date: 'July 2020'
  },
  {
    authors: 'Sowmya, K.D., Prakash, P.S., Bharath, H.A.',
    title: 'Urban surface simulation through image-to-image translation deep learning algorithm using optical aerial imagery.',
    conference: 'IGARSS 2020',
    location: 'USA',
    date: 'July 2020'
  },
  {
    authors: 'Prakash, P.S., Bharath, H.A.',
    title: 'Rooftop solar potential estimation using UAV through deep learning for efficient infrastructure development.',
    conference: 'ASCE 2020',
    location: 'Kolkata, India',
    date: 'March 2020'
  },
  {
    authors: 'Lalilta, A., Nimish, G., Bharath., H.A.',
    title: 'Land use pattern anlysis and Land Surface Temperature extraction: A case study of Kolkata.',
    conference: 'Indicon 2019',
    location: 'Gujarat, India',
    date: 'December 2019'
  },
  {
    authors: 'Nimish, G., Bharath, H.A.',
    title: 'Spatial-temporal impacts of urban land use land cover on land surface temperature: Coimbatore.',
    conference: '5th International Conference on Countermeasures to Urban Heat Islands, International Institute of Information Technology - Hyderabad',
    location: 'India',
    date: 'December 2019'
  },
  {
    authors: 'Chandan, M.C., Nimish, G., Bharath, H.A.',
    title: 'Mapping and assessing spatial forms of Urban Expansion through spatio-temporal metrics and modelling the future urban growth.',
    conference: 'International Conference on Future Cities (ICFC-2019)',
    location: 'IIT Roorkee, India',
    date: 'December 2019'
  },
  {
    authors: 'Bharath, H.A.',
    title: 'Developing a Spatial Data Infrastructure through Urban observatory for Sustainable Urban Development.',
    conference: 'National conference on Storing Energy for sustainable future- future energy in an Isolated world- 35th National convention of Electrical Engineers',
    location: 'Chennai, India',
    date: 'November 2019'
  },
  {
    authors: 'Chandan, M.C., Aadithyaa, J.S., Prakash, P.S., Bharath., H.A.',
    title: 'Integration of Particle swarm optimization with SLEUTH for Urban growth pattern visualisation.',
    conference: '55th International Society of City and Regional Planners congress (55th ISOCARP-2019)',
    location: 'Indonesia',
    date: 'September 2019'
  },
  {
    authors: 'Chandan, M.C., Bharath., H.A.',
    title: 'Exploring Urbanization Pattern Change – A Case of Two Metro Cities of India.',
    conference: 'NASA SARI LULCC meet - Land Use/Cover Changes, Environment and Emissions in South/Southeast Asia – An International Regional Science Meeting',
    location: 'Johor Bahru, Malaysia',
    date: 'July 2019'
  },
  {
    authors: 'Chandan, M.C., Nimish, G., Bharath., H.A.',
    title: 'Quantitative Measurement, Analysis of Land Use Change through Spatio-Temporal Pattern and Modelling.',
    conference: '16th International Conference on Computers in Urban Planning and Urban Management',
    location: 'China',
    date: 'July 2019'
  },
  {
    authors: 'Akshit, S., Bharath., H.A.',
    title: 'Integrated System Dynamics Cellular Automata Housing Allocation model to understand housing demand and supply.',
    conference: '49th Urban Affairs Conference',
    location: 'California, USA',
    date: 'April 2019'
  },
  {
    authors: 'Nimish, G., Chandan, M.C., Prakash, P.S., Bharath., H.A.',
    title: 'Characterizing the relationship between land use pattern and land surface temperature with automated built up extraction: Process, pattern and modelling.',
    conference: 'EGU General Assembly 2019',
    location: 'Vienna, Austria',
    date: 'April 2019'
  },
  {
    authors: 'Prakash, P.S., Satrupa, M., Bharath., H.A.',
    title: 'Automatic extraction of building features from UAV using artificial neural networks.',
    conference: '1st International Conference on Unmanned Aerial System in Geomatics - 2019',
    location: 'IIT Roorkee Delhi, India',
    date: 'April 2019'
  },
  {
    authors: 'Sudeep, B., Nimish, G., Bharath., H.A.',
    title: 'Spatial-temporal impacts of urban land use land cover on land surface temperature: Coimbatore.',
    conference: 'International Conference on Smart Cities: Opportunities and Challenges, Jamia Millia Islamia',
    location: 'New Delhi, India',
    date: 'March 2019'
  },
  {
    authors: 'Satrupa, M., Enosh D., Aishwarya, N., Bharath., H.A.',
    title: 'Development of Flood Inundation Map Using Geospatial Techniques.',
    conference: 'Climate Change Impacts, Vulnerabilities, and Adaptation: Emphasis on India and Neighbourhood (CCIVA 2019), International Institute of Technology Kharagpur',
    location: 'India',
    date: 'February 2019'
  },
  {
    authors: 'Aishwarya, N., Das, S., Bharath, H.A.',
    title: 'Adaptive capacity assessment of a region against flood vulnerability using GIS and remote sensing.',
    conference: '4thWCDM: 4th World congress on Disaster management',
    location: 'Bombay, India',
    date: '2019'
  },
  {
    authors: 'Ramachandra, T.V., Deepthi, H., Bharath, H. A., Venugopal, R., Joshi, N.V.',
    title: 'Bioethanol from Estuarine Macroalgae, West Coast of Karnataka, India.',
    conference: '35th Annual Symposium on Space Science and Technology',
    location: 'IISc, India',
    date: 'January 2019'
  },
  {
    authors: 'Bharath., H.A., Chandan, M.C., Nimish, G., Prakash, P.S.',
    title: 'Modelling and characterizing the urban growth pattern in Silicon Valley by establishing a relationship with LST and Building footprint.',
    conference: 'AGU fall meeting',
    location: 'USA',
    date: 'December 2018'
  },
  {
    authors: 'Chandan, M.C., Nimish, G., Bharath., H.A.',
    title: 'Addressing sustainable agenda challenge through analysis of LST, GHG emissions and visualisation of urban growth in two Megacities of India.',
    conference: 'AGU fall meeting',
    location: 'USA',
    date: 'December 2018'
  },
  {
    authors: 'Prakash, P.S., Bharath., H.A.',
    title: 'Building rooftop extraction and estimation of solar energy capabilities using machine learning.',
    conference: 'National Symposium is Advancements in Geospatial Technology for Societal Benefits',
    location: 'Ahmedabad, India',
    date: 'December 2018'
  },
  {
    authors: 'Chandan, M.C., Nimish, G., Bharath., H.A.',
    title: 'Analyzing Urban Spatial Patterns and Trend of Future Urban Expansion Using SLEUTH.',
    conference: 'FOSS 4G Asia',
    location: 'Sri Lanka',
    date: 'December 2018'
  },
  {
    authors: 'Chandan, M.C., Bharath., H.A.',
    title: 'Analysis and modelling of impervious land-use expansion using remote sensing and GIS in Coimbatore, India.',
    conference: 'Lake 2018',
    location: 'India',
    date: 'November 2018'
  },
  {
    authors: 'Chandan, M.C., Nimish, G., Bharath., H.A.',
    title: 'Modelling Urban transition using Cellular Automata based Sleuth modelling.',
    conference: 'IEEE SSCI',
    location: 'Bangalore, India',
    date: 'November 2018'
  },
  {
    authors: 'Prakash, P.S., Soumya, K.D., Bharath., H.A.',
    title: 'Urban building extraction using satellite imagery through Machine learning.',
    conference: 'IEEE SSCI',
    location: 'Bangalore, India',
    date: 'November 2018'
  },
  {
    authors: 'Nimish, G., Chandan, M.C., Bharath., H.A.',
    title: 'Understanding current and future landuse dynamics with land Surface temperature alterations: a case study of chandigarh.',
    conference: 'ISPRS technical commission v Education & outreach Geospatial technology - pixel to people- ISPRS annals',
    location: 'Dehradun, India',
    date: 'November 2018'
  },
  {
    authors: 'Prakash, P.S., Bharath., H.A.',
    title: 'Machine Learning for urban structure extraction using optical satellite data.',
    conference: 'NatSYM 2018',
    location: 'India',
    date: 'November 2018'
  },
  {
    authors: 'Chandan, M.C., Bharath., H.A.',
    title: 'Exploring spatial trends of urban growth and modelling the change of land use in Varanasi: A Case of Spiritual Capital of India.',
    conference: 'NatSYM 2018',
    location: 'India',
    date: 'November 2018'
  },
  {
    authors: 'Nimish, G., Chandan, M.C., Bharath., H.A.',
    title: 'Satellite land surface temperature and urbansiation: Mapping modelling and understanding the trends of change.',
    conference: 'NatSYM 2018',
    location: 'India',
    date: 'November 2018'
  },
  {
    authors: 'Soumya, K.S., Prakash, P.S., Bharath, H. A.',
    title: 'Automatic identification of plant species through a convolutional neural network model for UAV mounted digital Cameras.',
    conference: 'ACRS 2018',
    location: 'Kaula Lampur, Malaysia',
    date: 'October 2018'
  },
  {
    authors: 'Gaurav, S., Shafia, A., Bharath, H. A.',
    title: 'Urban growth pattern with urban flood and temperature vulnerability using AI: a case study of Delhi.',
    conference: '9th IGRSM International Conference and Exhibition on Geospatial & Remote Sensing',
    location: 'Kuala Lumpur, Malaysia',
    date: 'April 2018'
  },
  {
    authors: 'Shafia, A., Gaurav, S., Bharath, H. A.',
    title: 'Urban growth modelling using Cellular Automata coupled with alnd cover indices for Kolkata Metropolitan region.',
    conference: '9th IGRSM International Conference and Exhibition on Geospatial & Remote Sensing',
    location: 'Kuala Lumpur, Malaysia',
    date: 'April 2018'
  },
  {
    authors: 'Shafia, A., Nimish G., Bharath, H. A.',
    title: 'Dynamics of Land Surface Temperature with changing Land-Use: Building a climate resilient smart city.',
    conference: 'International Conference for Convergence in Technology(I2CT 2018)',
    location: 'Pune, India',
    date: 'April 2018'
  },
  {
    authors: 'Gaurav, S., Chandan, M.C., Bharath, H. A.',
    title: 'Combined Spatial Multi-criteria approach for assessing and mapping urban flood vulnerable zones in capital region of India.',
    conference: 'International Conference for Convergence in Technology(I2CT 2018)',
    location: 'Pune, India',
    date: 'April 2018'
  },
  {
    authors: 'Bharath, H.A.',
    title: 'Urbanisation and city expansion threats: Pattern, Process and Modelling.',
    conference: '105th Indian Science Congress 2018',
    location: 'Manipur, India',
    date: 'March 2018'
  },
  {
    authors: 'Ramachandra, T. V., Jefferey, M.S., Bharath., H.A., Bharath S.',
    title: 'Micro level analysis of Environmentally disastrous urbanization in Bangalore.',
    conference: 'International Workshop on Biodiversity & Climate Change 2018',
    location: 'Kharagpur, India',
    date: 'Febraury 2018',
    note: '2nd Best Oral presented paper'
  },
  {
    authors: 'Nimish, G., Chandan, M.C., Bharath., H.A.',
    title: 'Monitoring and modelling of spatiotemporal change in land use and understanding its impact on land surface temperature.',
    conference: 'International Workshop on Biodiversity & Climate Change 2018',
    location: 'Kharagpur, India',
    date: 'Febraury 2018'
  },
  {
    authors: 'Ramachandra, T. V., Jefferey, M.S., Bharath, H. A., Vinay, S.',
    title: 'Geo-visualisation of landscape dynamics in the proposed mega industrial corridor.',
    conference: 'International Workshop on Biodiversity & Climate Change 2018',
    location: 'Kharagpur, India',
    date: 'Febraury 2018'
  },
  {
    authors: 'Shafia, A., Gaurav, S., Chandan, M.C., Bharath, H. A.',
    title: 'Visualising urban growth pattern through agent and urban environmental factor(s) based modelling framework: A case study of Delhi.',
    conference: 'International Workshop on Biodiversity & Climate Change 2018',
    location: 'Kharagpur, India',
    date: 'Febraury 2018'
  },
  {
    authors: 'Dharini, J., Bharath, H.A., Arkopal, G., Joy, S.',
    title: 'Application of Geospatial techniques to explore linkages between urban growth and cultural setting of a Historical city.',
    conference: 'NRSC user interaction meet, Geospatial World Forum 2018',
    location: 'Hyderabad, India',
    date: 'January 2018'
  },
  {
    authors: 'Chandan, M.C., Dharini, J., Bharath, H. A.',
    title: 'Understanding Resilience and Sustainable Urban Growth through Land Use Simulation: Case Study of Emerging Metrocity of India.',
    conference: 'ASCE India conference 2017',
    location: 'Delhi, India',
    date: 'December 2017'
  },
  {
    authors: 'Nimish G., Shafia, A., Chandan, M.C., Bharath, H. A.',
    title: 'Monitoring land use/cover change and Land surface temperature.',
    conference: 'Second Regional Science & Technology Congress',
    location: 'West Bengal, India',
    date: 'November 2017',
    note: 'Best Paper Award'
  },
  {
    authors: 'Dharini, J., Chandan, M.C., Bharath, H. A.',
    title: 'Exposition of land Use Dynamics of Coimbatore City Using Geo-informatics.',
    conference: 'Second Regional Science & Technology Congress',
    location: 'West Bengal, India',
    date: 'November 2017'
  },
  {
    authors: 'Chandan M.C., Gaurav Singh, Bharath, H. A.',
    title: 'Urban growth characterization using Geospatial technologies.',
    conference: 'Second Regional Science & Technology Congress',
    location: 'West Bengal, India',
    date: 'Nov. 2017'
  },
  {
    authors: 'Chandan, M.C., Aishwarya, N., Nimish, G., Bharath, H. A.',
    title: 'Multi temporal urban growth characterization using Geospatial technologies.',
    conference: '38th Asian Conference on Remote Sensing (ACRS 2017)',
    location: 'Delhi, India',
    date: 'October 2017'
  },
  {
    authors: 'Brigit, M.B., Bharath, H.A., Nityanandam, Y., Ramachandra, T.V.',
    title: 'Analysis of landscape dynamics in the Pune-Mumbai industrial corridor.',
    conference: 'International Conference on urban geoinformatics, TERI University',
    location: 'Delhi, India',
    date: 'February 2017'
  },
  {
    authors: 'Chandan, M. C., Bharath, H.A., Ramachandra, T.V.',
    title: 'Integrated approach to visualize urban growth: case study of rapidly urbanising city.',
    conference: 'International Symposium on Water Urbanism and Infrastructure Development in Eco-Sensitive Zones',
    location: 'Kolkata, India',
    date: 'January 2017',
    note: 'Best Paper Award'
  },
  {
    authors: 'Chandan, M.C., Vinay, S., Bharath, H.A., Ramachandra, T.V.',
    title: 'Land use assessment and urban growth monitoring in Hyderabad region, India.',
    conference: 'Lake 2016, Alva’s college',
    location: 'Moodabidri, India',
    date: 'December 2016'
  },
  {
    authors: 'Bharath, H. A., Vinay, S., Ramachandra, T.V.',
    title: 'Comparative assessment of Agent based and Rule based models for urban growth visualization.',
    conference: 'Kerala Environment Congress 2016, Energy Management Centre – Kerala',
    location: 'India',
    date: 'November 2016'
  },
  {
    authors: 'Ramachandra, T.V., Vinay, S., Bharath, H. A., Shashishankar, A.',
    title: 'Landscape Status and Hydrological Regime of Aghanashini River Basin.',
    conference: 'SWWEM-2016-International Conference & Exhibition On Best Practices in Sustainable Water, Waste Water & Energy Management, IISc',
    location: 'Bangalore',
    date: 'August 2016'
  },
  {
    authors: 'Vinay, S., Bharath, H. A., Chandran, M. D. S., Shashishankar, A., Ramachandra, T. V.',
    title: 'Linkages between catchment landscape dynamics and the natural flow regime.',
    conference: 'ICEE 2016',
    location: 'Coimbatore, Tamilnadu, India',
    date: 'June 2016'
  },
  {
    authors: 'Ramachandra, T.V., Bharath, H. A., Vinay, S., Kumar, U., Venugopal, K. R., Joshi, N.V.',
    title: 'Modelling and Visualization of Urban Trajectory in 4 cities of India.',
    conference: 'IISc- ISRO-STC 2016, IISc',
    location: 'Bangalore, India',
    date: 'January 2016'
  },
  {
    authors: 'Bharath, H.A., Ramachandra, T.V.',
    title: 'Future of Indian cities: Looking at spatial growth perspective – Smart cities and Planning.',
    conference: 'Livable Habitat & Sustainable Infrastructure: a key to smart growth, Hyatt Regency',
    location: 'Kolkata, India',
    date: 'January 2016'
  },
  {
    authors: 'Bharath, H. A., Ramachandra, T.V.',
    title: 'Green to Grey: Bangalore.',
    conference: 'International LCLUC Regional Science Team Meeting in South and Southeast Asia, organized by NASA',
    location: 'Yangon University, Yangon, Myanmar',
    date: 'January 2016',
    note: 'Poster'
  },
  {
    authors: 'Bharath, H. A., Vinay, S., Ramachandra, T.V.',
    title: 'Landscape dynamics modelling through integrated Markov, Fuzzy-AHP and Cellular Automata.',
    conference: 'International Geoscience and Remote Sensing Symposium (IEEE IGARSS 2014), Quebec City convention centre',
    location: 'Quebec, Canada',
    date: 'July 2014'
  },
  {
    authors: 'Bharath, H.A., Vishwanath, Bhat, Ramachandra, T.V.',
    title: 'Spatial Patterns of Urban Growth with Globalization in India’s Silicon Valley.',
    conference: 'National Conference on Open Source GIS: Opportunities and Challenges Department of Civil Engineering, IIT (BHU)',
    location: 'Varanasi',
    date: 'October 2015',
    note: 'Best paper award'
  },
  {
    authors: 'Bharath, H. A., Vinay, S., Ramachandra, T.V.',
    title: 'Prediction of Spatial Patterns of Urban Dynamics in Pune, India.',
    conference: 'IEEE-Indicon 2014',
    location: 'Pune, Maharastra, India',
    date: 'December 2014'
  },
  {
    authors: 'Ramachandra, T.V., Chandan, M. C., Bharath, H. A., Vinay, S., Sellers, J.M., Venugopal, K. R.',
    title: 'Monitoring and modelling patterns of urban growth in Chennai, India.',
    conference: 'NRSC UIM 2015',
    location: 'Hyderabad, Telagana, India',
    date: 'January 2015'
  },
  {
    authors: 'Ramachandra, T.V., Vinay, S., Bharath, H. A., Bharath, S., Shashishankar, A.',
    title: 'Landscape Status and Hydrological Regime: Insights to Linkages in Sharavati and Varada Catchments, Central Western Ghats.',
    conference: 'NRSC UIM 2015',
    location: 'Hyderabad, Telagana, India',
    date: 'January 2015'
  },
  {
    authors: 'Ramachandra, T.V., Bharath, H. A., Vinay, S., Venugopal, K. R., Joshi, N.V.',
    title: 'Geospatial scenario based modelling of urban revolution in five major cities in India.',
    conference: 'IISc- STC 2015',
    location: 'Bangalore, Karnataka, India',
    date: 'January 2015'
  },
  {
    authors: 'Ramachandra, T.V., Bharath, H. A., Venugopal, K. R.',
    title: 'Modelling and geo-visulaisation of urban growth, India.',
    conference: 'Lake 2014',
    location: 'Uttara Kannada, Karnataka, India',
    date: 'November 2014'
  },
  {
    authors: 'Chandan, M. C., Bharath, H. A., Ramachandra, T.V., Venugopal, K. R.',
    title: 'Quantifying urbanisation using geospatial data and spatial metrics-a case study of Madras.',
    conference: 'Lake 2014',
    location: 'Uttara Kannada, Karnataka, India',
    date: 'November 2014'
  },
  {
    authors: 'Ramachandra, T.V., Bharath, H. A., Tarun, K.K., Venugopal, K. R.',
    title: 'Modelling of urban dynamics: a case study of Bhopal and its environs, India.',
    conference: 'Lake 2014',
    location: 'Uttara Kannada, Karnataka, India',
    date: 'November 2014'
  },
  {
    authors: 'Shweta, G., Swati, G., Bharath, H. A., Ramachandra, T.V.',
    title: 'Land use dynamics of central and Southern Western Ghats.',
    conference: 'Lake 2014',
    location: 'Uttara Kannada, Karnataka, India',
    date: 'November 2014'
  },
  {
    authors: 'Ramachandra, T.V., Vinay, S., Bharath, H. A., Bharath, S., Shashishankar, A.',
    title: 'Environmental flow assessment in the rivers originating at the Western Ghats.',
    conference: 'Lake 2014',
    location: 'Uttara Kannada, Karnataka, India',
    date: 'November 2014'
  },
  {
    authors: 'Ramachandra, T.V., Nupur, N., Vinay, S., Bharath, H. A.',
    title: 'Modeling Hydrologic regime of Lakshmanatirtha watershed, Cauvery River.',
    conference: 'IEEE-GHTC-SAS 2014',
    location: 'Trivandrum, Kerala, India',
    date: 'September 2014'
  },
  {
    authors: 'Ramachandra, T.V., Bharath, H. A., Vinay, S., Joshi, N. V., Kumar, U., Venugopal, R. K.',
    title: 'Modelling Urban Revolution in Greater Bangalore, India.',
    conference: '30th Annual In-House Symposium on Space Science and Technology, ISRO-IISc Space Technology Cell, Indian Institute of Science',
    location: 'Bangalore',
    date: 'November 2013'
  },
  {
    authors: 'Vinay, S., Bharath, S, Bharath, H.A., Ramachandra, T.V.',
    title: 'Hydrologic model with landscape dynamics for drought monitoring.',
    conference: 'Joint International Workshop of ISPRS on Geospatial Data for Disaster and Risk Reduction',
    location: 'Hyderabad, India',
    date: 'November 2013'
  },
  {
    authors: 'Bharath, H.A., Vinay, S., Ramachandra, T.V.',
    title: 'Modelling and Simulation of Urbanization in Greater Bangalore.',
    conference: 'National Geospatial Data Infrastructure 2013, IIT Bombay',
    location: 'Mumbai, India',
    date: 'November 2013'
  },
  {
    authors: 'Bharath, H.A., Ramachandra. T.V.',
    title: 'Visualisation of urbanisation patterns in Greater Bangalore, India.',
    conference: 'CES in house symposium, New Biological Science Auditorium, Indian Institute of Science',
    location: 'Bangalore',
    date: 'November 2013'
  },
  {
    authors: 'Bharath, H.A., Vinay, S., Ramachandra, T.V.',
    title: 'Prediction of Land use dynamics in the rapidly urbanising landscape using land change modeller.',
    conference: 'Fourth International Joint Conference on Advances in Engineering and Technology, AET 2013',
    location: 'NCR Delhi, India',
    date: 'December 2013'
  },
  {
    authors: 'Bharath, H.A., Ramachandra. T.V.',
    title: 'Measuring urban sprawl in Tier II cities of Karnataka, India.',
    conference: 'IEEE Global Humanitarian Technology Conference: South Asia Satellite (IEEE-GHTC-SAS)',
    location: 'Techno Park, Trivandrum, Kerala, India',
    date: 'August 2013'
  },
  {
    authors: 'Bharath, H.A., Vinay S., Ramachandra. T.V.',
    title: 'Comprehension of temporal land use dynamics in urbanising landscape.',
    conference: '2ND National Remote Sensing Users Meet, NRSC',
    location: 'Hyderabad, India',
    date: 'February 2013'
  },
  {
    authors: 'Bharath, S., Bharath, H.A., Sannadurgappa, D., Ramachandra, T. V.',
    title: 'Landscape Dynamics through Spatial Metrics.',
    conference: 'India GeoSpatial Conference, Epicentre',
    location: 'Gurgaon, India',
    date: 'February 2012'
  },
  {
    authors: 'Bharath, H.A., Bharath, S., Sreekantha, S., Sannadurgappa, D., Ramachandra, T. V.',
    title: 'Spatial patterns of urbanization in Mysore: Emerging Tier II City in Karnataka.',
    conference: 'National Remote Sensing Users Meet, NRSC',
    location: 'Hyderabad, India',
    date: 'February 2012'
  },
  {
    authors: 'Bharath, H.A., Sannadurgappa, D., Ramachandra, T.V.',
    title: 'Simulation of Urban dynamics through Spatial Metrics.',
    conference: 'Student Symposium, Centre for Sustainable Technologies, IISc',
    location: 'Bangalore, India',
    date: 'May 2012'
  },
  {
    authors: 'Bharath, H.A., Ramachandra, T. V.',
    title: 'Spatial Pattern analysis of two urbanising Tier II cities in Karnataka using open source GIS - GRASS.',
    conference: 'OSGEO-INDIA: FOSS4G 2012- First National Conference "Open Source Geospatial Resources to Spearhead Development and Growth", IIIT Hyderabad',
    date: 'October 2012'
  },
  {
    authors: 'Bharath, S, Bharath, H.A., Rajan, K. S., Ramachandra, T. V.',
    title: 'Cost effective mapping, monitoring and visualisation of spatial patterns of urbanisation using FOSS.',
    conference: 'OSGEO-INDIA: FOSS4G 2012- first national conference "Open Source Geospatial Resources to Spearhead Development and Growth", IIIT Hyderabad',
    date: 'October 2012'
  },
  {
    authors: 'Bharath, H.A., Sannadurgappa, D. Ramachandra, T.V.',
    title: 'Status of wetlands in urbanising Tier II cities of Karnataka.',
    conference: 'Lake 2012: Wetlands, National Conference on Conservation and Management of Wetland Ecosystems, School of Environmental Sciences, M. G. University',
    location: 'Kerala, India',
    date: 'November 2012'
  },
  {
    authors: 'Vinay S, Bharath, H.A., and Ramachandra, T.V.',
    title: 'Spatio Temporal dynamics of Raichur City.',
    conference: 'Lake 2012: National Conference on Conservation and Management of Wetland Ecosystems, School of Environmental Sciences, M. G. University',
    location: 'Kerala, India',
    date: 'November 2012'
  },
  {
    authors: 'Bharath, H.A., Sreekantha, S., Sannadurgappa, D., Ramachandra, T. V.',
    title: 'Spatial patterns of urbanization in an emerging Tier II City, Mysore.',
    conference: 'Samanway 2012, Indian Institute of Science',
    location: 'Bangalore, India',
    date: 'March 2012'
  },
  {
    authors: 'Bharath, H.A., Bharath, S., Sannadurgappa, D., Ramachandra, T. V.',
    title: 'Effectiveness of landscape Spatial Metrics with reference to the Spatial Resolutions of Remote Sensing Data.',
    conference: 'India Conference on Geo-spatial Technologies & Applications 2012, IIT Bombay',
    location: 'Mumbai, India',
    date: 'April 2012'
  },
  {
    authors: 'Subash Chandran, M. D., Rao, G. R., Prakash Mesta, Bharath, H.A., Kumar, U., Ramachandra, T. V.',
    title: 'Landslides in coastal Uttara Kannada: Management towards risk reduction.',
    conference: 'Disaster, Risk Vulnerablity Conference 2011, School of Environmental Sciences, Mahatma Gandhi University',
    location: 'India',
    date: 'March 2011'
  },
  {
    authors: 'Ramachandra, T. V., Bharath, H.A., Vinay, S., Kumar, U., Joshi, N. V., Venugopal Rao.',
    title: 'Modelling Urbanisation pattern.',
    conference: '30th Annual In-House Symposium on Space Science and Technology, ISRO-IISc Space Technology Cell, Indian Institute of Science',
    location: 'Bangalore, India',
    date: 'November 2010'
  },
  {
    authors: 'Bharath, H. A., Sannadurgappa, D., Ramachandra, T.V.',
    title: 'Urban growth monitoring through spatio-temporal analysis.',
    conference: 'Lake 2010: Wetlands, Biodiversity and Climate change, Satish Dhawan Auditorium, Indian Institute of Science',
    location: 'Bangalore',
    date: 'December 2011'
  },
  {
    authors: 'Ramachandra T. V., Kumar, U., Bharath H. A., Diwakar P. G., Joshi, N. V.',
    title: 'Landslide Susceptible Locations in Western Ghats: Prediction through open Modeller.',
    conference: '26th Annual In-House Symposium on Space Science and Technology, ISRO-IISc Space Technology Cell, Indian Institute of Science',
    location: 'Bangalore, India',
    date: 'January 2010'
  },
  {
    authors: 'Bharath, H. A., Kumar, U., Ramachandra T. V.',
    title: 'Fusion of multi resolution remote sensing data for urban sprawl analysis.',
    conference: 'COSMAR 2009, Department of Management Studies, Indian Institute of Science',
    location: 'Bangalore, India',
    date: 'November 2009'
  }
];

export const books: Book[] = [
  {
    authors: 'Bharath, H.A., Ramachandra, T.V.',
    title: 'Insights of urban dynamics for sustainable design of Smart Cities.',
    publisher: 'Lap Lambert Academic Publishing',
    year: 2016,
    pages: '240',
  },
  {
    authors: 'Bharath, H.A., Ramachandra, T.V.',
    title: 'Urban Growth Patterns in India: Spatial Analysis for Sustainable Development.',
    publisher: 'CRC Press',
    year: 2020,
    pages: '195',
  },
  {
    authors: 'Bharath, H.A., Prakash, P.S.',
    title: 'Building Feature Extraction with Machine Learning: Geospatial Applications.',
    publisher: 'CRC Press',
    year: 2022,
    pages: '180',
  },
];

export const bookChapters: BookChapter[] = [
  {
    authors: 'Vinay, S., Bharath, H.A.',
    title: 'Geo-spatial modelling of flood risk due to local sea-level rise and landscape dynamics: A case of Sagar Island.',
    bookTitle: 'Applications of Remote Sensing and GIS in Natural Resources and Built Infrastructure Management',
    publisher: 'Springer',
    year: 2021,
  },
  {
    authors: 'Nimish, G., Bharath, H.A., Ramachandra, T.V.',
    title: 'Visualisation of Land use Change Pattern and Its Impact on Urban Heat Islands.',
    bookTitle: 'Global Urban Heat Island Mitigation',
    publisher: 'Elsevier',
    year: 2021,
    isbn: '9780323897945',
  },
  {
    authors: 'Chandan, M.C., Nimish, G., Bharath, H.A.',
    title: 'Analysing and predicting urban expansion and its effects on surface temperature for two Indian megacities: Bengaluru and Chennai.',
    bookTitle: 'Geo Spatial Technology and Smart City Development',
    publisher: 'Springer',
    year: 2021,
    isbn: '978-3-030-71944-9',
  },
  {
    authors: 'Prakash, P.S., Nimish, G., Chandan, M.C., Bharath, H.A.',
    title: 'Urbanization: pattern, effects and modelling.',
    bookTitle: 'Machine Learning for Urban Computing',
    publisher: 'Springer',
    year: 2021,
    isbn: '978-981-16-0934-3',
  },
  {
    authors: 'Chandan, M.C., Bharath, H.A.',
    title: 'Visualising future trends of Urban Expansion Through Spatio-Temporal Metrics and land use modelling.',
    bookTitle: 'Future Cities',
    publisher: 'Springer',
    year: 2020,
    isbn: '978-81-927014-5-5',
  },
  {
    authors: 'Nimish, G., Sudeep, V.B., Bharath, H.A.',
    title: 'Impacts of Urban Land Use Land Cover Pattern on Land Surface Temperature.',
    bookTitle: 'Smart Cities—Opportunities and Challenges',
    publisher: 'Springer',
    year: 2020,
    isbn: '978-981-15-2544-5',
  },
  {
    authors: 'Bharath, H.A., Nimish, G., Chandan, M.C.',
    title: 'Exposition of spatial urban growth pattern using PSO-SLEUTH and identifying its effects on surface temperature.',
    bookTitle: 'Urban Ecology',
    publisher: 'Elsevier',
    year: 2020,
    isbn: '9780128207307',
  },
  {
    authors: 'Ramachandra, T.V., Bharath, H.A., Vinay, S., Chandan, M.C.',
    title: 'Simulation and modelling the urban dynamics in Bangalore - Silicon Valley of India.',
    bookTitle: 'Planning Megacities in the Global South',
    publisher: 'Routledge',
    year: 2020,
    isbn: '9780367223724',
  },
  {
    authors: 'Ramachandra, T.V., Bharath, H.A.',
    title: 'Bangalore: Unplanned Urban Revolution and Consequent Environmental Sustainability.',
    bookTitle: 'Wiley-Blackwell Encyclopedia of Urban and Regional Studies',
    publisher: 'John Wiley & Sons',
    year: 2019,
    isbn: '9781118568453',
    doi: 'https://doi.org/10.1002/9781118568446.eurs0014',
  },
  {
    authors: 'Bharath, H.A., Chandan, M.C., Ramachandra, T.V.',
    title: 'Urbanisation in India: Patterns, Visualisation of cities and developing an Urban observatory.',
    bookTitle: 'Urban Remote Sensing, Second Edition',
    publisher: 'Taylor and Francis',
    year: 2018,
    isbn: '9781138054608',
  },
  {
    authors: 'Ramachandra, T.V., Shreejith, K., Bharath, H.A.',
    title: 'Sector-Wise Assessment of Carbon Footprint across Major Cities in India.',
    bookTitle: 'Assessment of Carbon Footprint in Different Industrial Sectors (Eds. Muthu, S.S.), Eco-Production',
    publisher: 'Springer',
    year: 2014,
    isbn: '9789814585743',
  },
  {
    authors: 'Ramachandra, T.V., Kumar, U., Bharath, H.A.',
    title: 'Ecological Approach for Mitigation of Urban Flood Risks.',
    bookTitle: 'Ecosystem Approach to Disaster Risk Reduction (Eds. Gupta et al.)',
    publisher: 'National Institute of Disaster Management, New Delhi',
    year: 2012,
  },
  {
    authors: 'Ramachandra, T.V., Bharath, H.A., Kumar, U.',
    title: 'Conservation of wetlands to mitigate urban floods.',
    bookTitle: 'Resources, Energy, and Development, Issue 9(1)',
    publisher: 'TERI, New Delhi',
    year: 2012,
  },
];

export const technicalReports: TechnicalReport[] = [
  {
    authors: 'Ramachandra, T.V., Bharath, S., Vinay, S., Bharath, H.A.',
    title: 'Ecosystem extent account for Karnataka state.',
    report: 'UNEP Technical Report',
    institution: 'Environmental Information System, CES, Indian Institute of Science, Bangalore',
    year: 2021,
  },
  {
    authors: 'Ramachandra, T.V., Bharath, S., Vinay, S., Rakesh, D.R., Bharath, H.A.',
    title: 'Ecosystem condition account for Karnataka state.',
    report: 'UNEP Technical Report',
    institution: 'Environmental Information System, CES, Indian Institute of Science, Bangalore',
    year: 2021,
  },
  {
    authors: 'Ramachandra, T.V., Bharath, S., Vinay, S., Bharath, H.A.',
    title: 'Valuation of Ecosystem services.',
    report: 'UNEP Technical Report',
    institution: 'Environmental Information System, CES, Indian Institute of Science, Bangalore',
    year: 2021,
  },
  {
    authors: 'Ramachandra, T.V., Bharath, S., Vinay, S., Chandan, M.C., Bharath, H.A.',
    title: 'Scenario based assessment of policy interventions in Karnataka state.',
    report: 'UNEP Technical Report',
    institution: 'Environmental Information System, CES, Indian Institute of Science, Bangalore',
    year: 2021,
  },
  {
    authors: 'Ramachandra, T.V., Bharath, S., Vinay, S., Asulabha, K.S., Sincy, V., Bharath, H.A.',
    title: 'National Environmental Survey (NES)-Select Districts of India.',
    report: 'ENVIS Technical Report 163',
    institution: 'Environmental Information System, CES, Indian Institute of Science, Bangalore',
    year: 2020,
  },
  {
    authors: 'Ramachandra, T.V., Bharath, S., Sneha, H., Chandran, M.D.S., Bharath, H.A.',
    title: 'Profile of Rivers in Karnataka.',
    report: 'ENVIS Technical Report 145, Sahyadri Conservation Series 81',
    institution: 'Energy & Wetlands Research Group, CES, Indian Institute of Science, Bangalore',
    year: 2019,
  },
  {
    authors: 'Bharath, H.A., Arkopal, K.G., Bhargab, M., Ankhi, B., Swati, M., Soumya, K.G., Uday, S.',
    title: 'Roadmap to Develop Urban Observatory in India.',
    report: 'Draft Report to British Deputy High Commission, Kolkata',
    institution: 'IIT Kharagpur',
    year: 2018,
  },
  {
    authors: 'Ramachandra, T.V., Vinay, S., Bharath, H.A.',
    title: 'Frequent Floods in Bangalore: Causes and Remedial Measures.',
    report: 'ENVIS Technical Report 123',
    institution: 'Environmental Information System, CES, Indian Institute of Science, Bangalore',
    year: 2017,
  },
  {
    authors: 'Ramachandra, T.V., Bharath, H.A.',
    title: 'Urban sprawl in tier-ii cities of Karnataka: Analysis of patterns, process and environmental sustainability.',
    report: 'CiSTUP Technical Report CIST033',
    institution: 'Centre for Infrastructure, Sustainable Transportation and Urban Planning, Indian Institute of Science, Bangalore',
    year: 2013,
  },
  {
    authors: 'Bharath, H.A., Ramachandra, T.V.',
    title: 'Modelling the Spatial Patterns of Landscape dynamics: Review.',
    report: 'CES Technical Report No. 127',
    institution: 'Centre for Ecological Sciences, Indian Institute of Science, Bangalore',
    year: 2012,
  },
];
