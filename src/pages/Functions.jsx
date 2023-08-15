import React from 'react';

const Functions = () => {
    return (
        <div className='lg:px-32 md:px-12 sm:px-5 px-3 lg:py-8 py-4'>
            <h1 className='lg:text-center max-lg:inline-block font-semibold sm:text-3xl text-2xl py-1 border-b-[#af7501] mb-3 border-b-2 text-[#0f5f17]'>
                Functions of the Office Bearers of the Management Committee
            </h1>

            {/* Secretary */}
            <div className='pt-2'>
                <h2 className='font-semibold text-2xl py-1 border-b-[#af7501] mb-3 border-b text-[#0f5f17]'>
                    Secretary:
                </h2>
                <ul className='list-disc pl-6'>
                    <li>Shall keep records of all matters concerning the Association.</li>
                    <li>Shall record and read minutes at meetings.</li>
                    <li>Shall handle the correspondence of Association and take such action as may be directed by the executive committee or the President or in special circumstances act on his own initiative and report at a subsequent meeting.</li>
                    <li>Shall perform all other duties of secretarial and public relations nature as may be assigned to him by the management committee.</li>
                </ul>
            </div>

            {/* Treasurer */}
            <div className='pt-2'>
                <h2 className='font-semibold text-2xl py-1 border-b-[#af7501] mb-3 border-b text-[#0f5f17]'>
                    Treasurer:
                </h2>
                <ul className='list-disc pl-6'>
                    <li>Shall keep the savings book of the Association.</li>
                    <li>Shall pay all monies handed over to him to the Association’s Bank Accounts and hand over all books of accounts requested for the preparation of accounts.</li>
                    <li>Shall keep an imprest determined by the executive committee for the running of the day-to-day affairs of the association.</li>
                </ul>
            </div>

            {/* Import Export Manager */}
            <div className='pt-2'>
                <h2 className='font-semibold text-2xl py-1 border-b-[#af7501] mb-3 border-b text-[#0f5f17]'>
                    Import Export Manager:
                </h2>
                <ul className='list-disc pl-6'>
                    <li>Shall keep records of all the documents required for import and export.</li>
                    <li>Shall serve as a liaison between agents, brokers, banks, shippers, and warehouse facilities.</li>
                    <li>Shall resolve custom delays, if any.</li>
                    <li>Shall perform other duties as assigned to them.</li>
                    <li>Shall organize buyer-seller meets & make efforts to increase the export of kalanamak rice and other related products.</li>
                </ul>
            </div>

            {/* Publicity Manager */}
            <div className='pt-2'>
                <h2 className='font-semibold text-2xl py-1 border-b-[#af7501] mb-3 border-b text-[#0f5f17]'>
                    Publicity Manager:
                </h2>
                <ul className='list-disc pl-6'>
                    <li>Shall manage the public relations of the organization.</li>
                    <li>Shall analyze all media coverage of the organization and draft appropriate responses.</li>
                    <li>Shall organize promotional events such as press tours, and conferences, etc.</li>
                    <li>Shall perform other duties as assigned to them.</li>
                </ul>
            </div>

            {/* Production Manager */}
            <div className='pt-2'>
                <h2 className='font-semibold text-2xl py-1 border-b-[#af7501] mb-3 border-b text-[#0f5f17]'>
                    Production Manager:
                </h2>
                <ul className='list-disc pl-6'>
                    <li>Shall take responsibility for the production plan and execution of approved plan.</li>
                    <li>Shall create a system for inventory control and storage.</li>
                    <li>Shall perform other duties as assigned to them.</li>
                </ul>
            </div>

            {/* Research & Development Manager */}
            <div className='pt-2'>
                <h2 className='font-semibold text-2xl py-1 border-b-[#af7501] mb-3 border-b text-[#0f5f17]'>
                    Research & Development Manager:
                </h2>
                <ul className='list-disc pl-6'>
                    <li>Shall create a research and development program.</li>
                    <li>Shall develop new technology for the betterment of production.</li>
                    <li>Shall perform other duties as assigned to them.</li>
                </ul>
            </div>

            {/* Quality Control Manager */}
            <div className='pt-2'>
                <h2 className='font-semibold text-2xl py-1 border-b-[#af7501] mb-3 border-b text-[#0f5f17]'>
                    Quality Control Manager:
                </h2>
                <ul className='list-disc pl-6'>
                    <li>Shall implement and execute inspection, testing, and evaluation methods to ensure the best quality of products.</li>
                    <li>Shall prepare reports by collecting data on inspections or other aspects such as production, etc., which are analyzed in detail.</li>
                    <li>Shall perform other duties as assigned to them.</li>
                </ul>
            </div>

        </div>
    );
}

export default Functions;
