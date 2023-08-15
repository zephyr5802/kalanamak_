import React from 'react';

const Management_Committee = () => {
    return (
        <div className='lg:px-32 md:px-12 sm:px-5 px-3 lg:py-8 py-4'>
            <h1 className='lg:text-center max-lg:inline-block font-semibold sm:text-3xl text-2xl py-1 border-b-[#af7501] mb-3 border-b-2 text-[#0f5f17]'>
                Additional Committee Members
            </h1>

            <table className='w-full border-collapse'>
                <thead>
                    <tr className='bg-[#f7fafc]'>
                        <th className='py-3 px-6 text-[#0f5f17] text-center'>SN</th>
                        <th className='py-3 px-6 text-[#0f5f17] text-center'>Management Committee</th>
                        <th className='py-3 px-6 text-[#0f5f17] text-center'>Election Process</th>
                        <th className='py-3 px-6 text-[#0f5f17] text-center'>Qualification</th>
                        <th className='py-3 px-6 text-[#0f5f17] text-center'>Members Participating in the Election Process</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className='py-3 px-6 text-[#0f5f17] text-center'>9</td>
                        <td className='py-3 px-6 text-[#0f5f17]'>Secretary</td>
                        <td className='py-3 px-6 text-[#0f5f17]'>By General Election</td>
                        <td className='py-3 px-6 text-[#0f5f17]'>CEO of Farmer Producer Organization.</td>
                        <td className='py-3 px-6 text-[#0f5f17]'>
                            Life time members, General members, except ex-officio/permanent members.
                        </td>
                    </tr>
                    <tr>
                        <td className='py-3 px-6 text-[#0f5f17] text-center'>10</td>
                        <td className='py-3 px-6 text-[#0f5f17]'>Treasurer</td>
                        <td className='py-3 px-6 text-[#0f5f17]'>By General Election</td>
                        <td className='py-3 px-6 text-[#0f5f17]'>Director of Farmer Producer Organization.</td>
                        <td className='py-3 px-6 text-[#0f5f17]'></td>
                    </tr>
                    <tr>
                        <td className='py-3 px-6 text-[#0f5f17] text-center'>11</td>
                        <td className='py-3 px-6 text-[#0f5f17]'>Import Export Manager</td>
                        <td className='py-3 px-6 text-[#0f5f17]'>By General Election</td>
                        <td className='py-3 px-6 text-[#0f5f17]'>Director of Farmer Producer Organization, Expert in Import-Export of Kalanamak rice</td>
                        <td className='py-3 px-6 text-[#0f5f17]'></td>
                    </tr>
                    <tr>
                        <td className='py-3 px-6 text-[#0f5f17] text-center'>12</td>
                        <td className='py-3 px-6 text-[#0f5f17]'>Publicity Manager</td>
                        <td className='py-3 px-6 text-[#0f5f17]'>By General Election</td>
                        <td className='py-3 px-6 text-[#0f5f17]'>Director of Farmer Producer Organization, Expert in Publicity and Advertisement</td>
                        <td className='py-3 px-6 text-[#0f5f17]'></td>
                    </tr>
                    <tr>
                        <td className='py-3 px-6 text-[#0f5f17] text-center'>13</td>
                        <td className='py-3 px-6 text-[#0f5f17]'>Production Manager</td>
                        <td className='py-3 px-6 text-[#0f5f17]'>By General Election</td>
                        <td className='py-3 px-6 text-[#0f5f17]'>Director of Farmer Producer Organization, Expert in Production Process, Farmer Engaged in Production of Kalanamak</td>
                        <td className='py-3 px-6 text-[#0f5f17]'></td>
                    </tr>
                    <tr>
                        <td className='py-3 px-6 text-[#0f5f17] text-center'>14</td>
                        <td className='py-3 px-6 text-[#0f5f17]'>Research & Development Manager</td>
                        <td className='py-3 px-6 text-[#0f5f17]'>By General Election</td>
                        <td className='py-3 px-6 text-[#0f5f17]'>Director of Farmer Producer Organization, Scientist or Learned person who is expert in research and development</td>
                        <td className='py-3 px-6 text-[#0f5f17]'></td>
                    </tr>
                    <tr>
                        <td className='py-3 px-6 text-[#0f5f17] text-center'>15</td>
                        <td className='py-3 px-6 text-[#0f5f17]'>Quality Control Manager</td>
                        <td className='py-3 px-6 text-[#0f5f17]'>By General Election</td>
                        <td className='py-3 px-6 text-[#0f5f17]'>Director of Farmer Producer Organization, Expert in Kalanamak rice in relation to quality control.</td>
                        <td className='py-3 px-6 text-[#0f5f17]'></td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default Management_Committee;
