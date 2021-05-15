import Time from "../../Utils/Time";
import { Link} from "react-router-dom"

function ProfileQuestions({item}) {
  return (
    <li key={item._id}>
                      <div className="relative pb-8">
                        <div className="relative flex space-x-3">
                          <div className="min-w-0 flex-1 pt-1.5 flex justify-between space-x-4">
                            <div>
                              <p className="text-sm text-gray-500">
                                {item.title}:{" "}
                                <Link
                                 to={`/question/${item._id}`}
                                  className="font-medium text-gray-900"
                                >
                                  {item.body}
                                </Link>
                              </p>
                            </div>
                            <div className="text-right text-sm whitespace-nowrap text-gray-500">
                              <Time time={item.date} />
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
  );
}

export default ProfileQuestions;
