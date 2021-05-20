import { useEffect, useState } from "react";
import { useParams } from "react-router";
import ProfileAnswers from "../Components/Profile/ProfileAnswers";
import ProfileQuestions from "../Components/Profile/ProfileQuestions";
function UsersProfile() {
  const { id } = useParams();

  const [prof, setProf] = useState();
  console.log(prof)
  useEffect(() => {
    fetch(process.env.REACT_APP_MAIN + "profile/" + id, {
      method: "GET",
      credentials: "include",
    }).then((data) =>
      data.json().then((profile) => {
        profile.questions.length > 8
          ? setProf({ ...profile, questions: profile.questions.slice(0, 8) })
          : setProf(profile);
      })
    );
  }, [id]);

  return prof ? (
    <div className="min-h-screen  bg-gray-100 dark:bg-gray-900 overflow-scroll">
    <main className="py-10">
      {/* Page header */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 md:flex md:items-center md:justify-between md:space-x-5 lg:max-w-7xl lg:px-8"></div>

      <div className="mt-8 max-w-3xl mx-auto grid grid-cols-1 gap-6 sm:px-6 lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-3">
        <div className="space-y-6 lg:col-start-1 lg:col-span-2">
          {/* Description list*/}
          <section aria-labelledby="applicant-information-title">
            <div className="bg-white dark:bg-gray-700 dark:text-white relative shadow sm:rounded-lg">
              <div className="px-4 py-5 sm:px-6">
                <h2
                  id="applicant-information-title"
                  className="text-lg leading-6 font-medium dark:text-gray-200 text-gray-900"
                >
                  <div className="flex items-center space-x-5">
                    <div className="flex-shrink-0">
                      <div className="relative">
                        <img
                          className="h-10 w-10 rounded-full"
                          src={prof?.user.avatar_url}
                          alt=""
                        />
                        <span
                          className="absolute inset-0 shadow-inner rounded-full"
                          aria-hidden="true"
                        />
                      </div>
                    </div>
                    <div>
                      
                        <div className="text-2xl dark:text-gray-100 font-bold text-gray-900">
                          {prof.user.name}
                        </div>
                     
                    </div>
                  </div>
                </h2>
                <dt className="text-sm font-medium dark:text-gray-200 text-gray-500"></dt>
                
                  <dd className="mt-5 text-md text-gray-700">{prof.user.info}</dd>
               
                
                   
             
              </div>
              <div className="border-t border-gray-200 dark:border-gray-600 px-4 py-5 sm:px-6">
                <dl className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
                  {prof.user.email !== null && (
                    <div className="sm:col-span-1">
                      <dt className="text-sm font-medium text-gray-500">
                        Email
                      </dt>
                      <dd className="mt-1 text-sm text-gray-900">
                        {prof.user.email}
                      </dd>
                    </div>
                  )}
                  <div className="sm:col-span-1">
                    <dt className="text-sm font-medium dark:text-white text-gray-500">
                      GitHub
                    </dt>
                    <a
                      href={`https://github.com/${prof.user.login}`}
                      alt=""
                      className="mt-1 hover:text-indigo-300 text-sm dark:text-gray-200 text-gray-900"
                    >
                      @{prof.user.login}
                    </a>
                  </div>
                  <div className="sm:col-span-1">
                    <dt className="text-sm font-medium dark:text-white text-gray-500">
                      Likes
                    </dt>
                    <dd className="mt-1 text-sm dark:text-gray-200  text-gray-900">
                      {prof && prof.sumLikes}
                    </dd>
                  </div>
                </dl>
              </div>
            </div>
          </section>

          {/* Answers*/}
          <section aria-labelledby="notes-title">
            <div className="bg-white dark:bg-gray-700 dark:text-white shadow sm:rounded-lg sm:overflow-hidden">
              <div className="divide-y divide-gray-200 dark:divide-gray-600">
                <div className="px-4 py-5 sm:px-6">
                  <h2
                    id="notes-title"
                    className="text-lg pl-2 font-medium dark:text-gray-200 text-gray-900"
                  >
                    Ответы
                  </h2>
                </div>
                <div className="px-2 ">
                  <ul className="divide-y dark:divide-gray-600">
                    {prof?.answers.map((el) => (
                      <ProfileAnswers answer={el} key={el._id} />
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </section>
        </div>

        <section
          aria-labelledby="timeline-title"
          className="lg:col-start-3 lg:col-span-1"
        >
          <div className="bg-white dark:bg-gray-700 dark:text-white py-5 shadow sm:rounded-lg ">
            <div
              id="timeline-title"
              className="text-lg flex pl-5 font-medium dark:text-gray-200 text-gray-900"
            >
              Вопросы
            </div>

            {/* Questions */}
            <div className="flow-root">
              <ul className="divide-y dark:divide-gray-600 space-y-2">
                {prof?.questions.length > 8
                  ? prof?.questions
                      .slice(0, 8)
                      .map((el) => (
                        <ProfileQuestions item={el} key={el._id} />
                      ))
                  : prof?.questions.map((el) => {
                      return <ProfileQuestions item={el} key={el._id} />;
                    })}
              </ul>
            </div>
 
          </div>
        </section>
      </div>
    </main>
  </div>
  ) : null;
}

export default UsersProfile;
