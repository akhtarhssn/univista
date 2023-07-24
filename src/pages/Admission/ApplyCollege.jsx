import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import Container from "../../components/Shared/Container/Container";
import { useLoaderData } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";

const ApplyCollege = () => {
  const { register, handleSubmit, reset, setValue } = useForm();
  const { user } = useContext(AuthContext);

  // Function to handle form submission
  const onSubmit = (data) => {
    // Your logic to handle form submission goes here
    console.log(data);
  };

  const college = useLoaderData();
  console.log(college.subjects);
  return (
    <div className="bg-gray-800 py-20">
      <Container>
        <div className="container mx-auto p-5 2xl:p-0">
          <Helmet>
            <title>
              {college?.name
                ? `Univista | Apply to ${college.name}`
                : "Univista"}
            </title>
          </Helmet>
          <div className="w-full md:max-w-3xl mx-auto dark:bg-gray-900 bg-gray-200 p-5 md:p-20 rounded-xl ">
            <div className="mb-8 text-2xl font-bold text-gray-200 text-center">
              <h2>Apply To: {college.name}</h2>
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="mb-6">
                <label
                  htmlFor="name"
                  className="block mb-2  font-medium text-gray-900 dark:text-white"
                >
                  Candidate Name <span className="text-red-600">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  {...register("name")}
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900  rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                  placeholder="Candidate Name"
                  required
                />
              </div>
              <div className="mb-6 w-full">
                <label
                  htmlFor="price"
                  className="block mb-2  font-medium text-gray-900 dark:text-white"
                >
                  Email <span className="text-red-600">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  {...register("email")}
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900  rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                  placeholder="Email"
                  required
                />
              </div>
              <div className="mb-6 w-full">
                <label
                  htmlFor="phone"
                  className="block mb-2  font-medium text-gray-900 dark:text-white"
                >
                  Email <span className="text-red-600">*</span>
                </label>
                <input
                  type="text"
                  id="phone"
                  name="phone"
                  {...register("phone")}
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900  rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                  placeholder="Phone"
                  required
                />
              </div>
              <div className="mb-6 w-full">
                <label
                  htmlFor="subject"
                  className="block mb-2 font-medium text-gray-900 dark:text-white"
                >
                  Subject <span className="text-red-600">*</span>
                </label>
                <select
                  id="subject"
                  name="subject"
                  {...register("subject")}
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                  required
                >
                  <option value="">Select a subject</option>
                  {/* Map through college.subjects and create options */}
                  {college.subjects.map((subject) => (
                    <option key={subject} value={subject}>
                      {subject}
                    </option>
                  ))}
                </select>
              </div>
              <div className="mb-6 w-full">
                <label
                  htmlFor="dob"
                  className="block mb-2 font-medium text-gray-900 dark:text-white"
                >
                  Date of Birth <span className="text-red-600">*</span>
                </label>
                <input
                  type="date"
                  id="dob"
                  name="dob"
                  {...register("dob")}
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                  required
                />
              </div>
              <div className="mb-6 w-full">
                <input
                  type="file"
                  className="file-input w-full max-w-xs dark:bg-gray-700 dark:text-gray-400 dark:border-gray-600"
                  {...register("image")}
                />
              </div>
              <div className="text-center md:text-left">
                <button
                  type="submit"
                  className="flex mx-auto md:mx-0 items-center gap-2 bg-gray-800 text-white hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-md text-lg px-10 py-4 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Submit Application
                </button>
              </div>
            </form>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ApplyCollege;
