import React from 'react';

const Permanent_Members = () => {
    return (
        <div className='lg:px-32 md:px-12 sm:px-5 px-3 lg:py-8 py-4'>
            <h1 className='lg:text-center max-lg:inline-block font-semibold sm:text-3xl text-2xl py-1 border-b-[#af7501] mb-3 border-b-2 text-[#0f5f17]'>
                Permanent Members and Qualifications
            </h1>

            <table className='w-full border-collapse'>
                <thead>
                    <tr className='bg-[#f7fafc]'>
                        <th className='py-3 px-6 text-[#0f5f17]'>SN</th>
                        <th className='py-3 px-6 text-[#0f5f17]'>Permanent Members</th>
                        <th className='py-3 px-6 text-[#0f5f17]'>Qualification</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className='py-3 px-6 text-[#0f5f17]'>1</td>
                        <td className='py-3 px-6 text-[#0f5f17]'>President</td>
                        <td className='py-3 px-6 text-[#0f5f17]'>District Magistrate</td>
                    </tr>
                    <tr>
                        <td className='py-3 px-6 text-[#0f5f17]'>2</td>
                        <td className='py-3 px-6 text-[#0f5f17]'>Vice President</td>
                        <td className='py-3 px-6 text-[#0f5f17]'>Chief Development Officer</td>
                    </tr>
                    <tr>
                        <td className='py-3 px-6 text-[#0f5f17]'>3</td>
                        <td className='py-3 px-6 text-[#0f5f17]'>Joint Secretary</td>
                        <td className='py-3 px-6 text-[#0f5f17]'>Deputy Director of Agriculture</td>
                    </tr>
                    <tr>
                        <td className='py-3 px-6 text-[#0f5f17]'>4</td>
                        <td className='py-3 px-6 text-[#0f5f17]'>Member</td>
                        <td className='py-3 px-6 text-[#0f5f17]'>District Agriculture Officer</td>
                    </tr>
                    <tr>
                        <td className='py-3 px-6 text-[#0f5f17]'>5</td>
                        <td className='py-3 px-6 text-[#0f5f17]'>Member</td>
                        <td className='py-3 px-6 text-[#0f5f17]'>Lead Bank Manager</td>
                    </tr>
                    <tr>
                        <td className='py-3 px-6 text-[#0f5f17]'>6</td>
                        <td className='py-3 px-6 text-[#0f5f17]'>Member</td>
                        <td className='py-3 px-6 text-[#0f5f17]'>Chief Veterinary Officer</td>
                    </tr>
                    <tr>
                        <td className='py-3 px-6 text-[#0f5f17]'>7</td>
                        <td className='py-3 px-6 text-[#0f5f17]'>Member</td>
                        <td className='py-3 px-6 text-[#0f5f17]'>Deputy Commissioner Industry</td>
                    </tr>
                    <tr>
                        <td className='py-3 px-6 text-[#0f5f17]'>8</td>
                        <td className='py-3 px-6 text-[#0f5f17]'>Member (Nominated)</td>
                        <td className='py-3 px-6 text-[#0f5f17]'>
                            Nominated by the President among Farmer/ or Agriculture Scientist / or Social Worker / or Businessman dealing in Kalanamak
                            <br />
                            * Nominated member tenure will be 3 years, post which he can be re-nominated for 3 more years by the President.
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default Permanent_Members;
