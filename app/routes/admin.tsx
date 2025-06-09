import { useEffect, useState } from "react";
import toast from "react-hot-toast";

export default function Admin() {

  interface User {
    id: number
    name: string
  }

  const [data, setData] = useState<User[]>([])

  // get users on mount
  useEffect(() => {
    const savedData = localStorage.getItem('users');
    if (savedData) {
      setData(JSON.parse(savedData) as User[]);
    } else {
      getUsers();
    }
  }, [])

  function getUsers(): void {
    fetch("/api/users")
      .then(res => res.json())
      .then(data => {
        setData(data);
        localStorage.setItem('users', JSON.stringify(data));
      })
      .catch(err => {
        toast.error("Erreur lors de la récupération des utilisateurs");
      });
  }

  function clearUsers(): void {
    setData([]);
    localStorage.setItem('users', JSON.stringify([]));
  }

  return (
    <div className="w-full">
      <div className="bg-gray-800 dark:bg-gray-800 flex flex-row justify-between items-center p-4">
        <h1 className="text-3xl font-bold text-white ">Administration</h1>
        <div className="flex flex-row gap-4">
          <button onClick={getUsers} className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg p-2">Rafraîchir les données</button>
          <button onClick={clearUsers} className="bg-red-600 hover:bg-red-700 text-white font-medium rounded-lg p-2">Effacer les utilisateurs</button>
        </div>
      </div>

      {data.length > 0 ? (
        <div className="grid grid-cols-8 gap-4 pt-4">
          {data.map((user) => (
            <div key={user.id}>
              <div className="bg-gray-200 dark:bg-gray-600 rounded-lg border-2 hover:bg-gray-500 border-black dark:border-white p-4">
                <span className="text-gray-900 dark:text-white">{user.name}</span>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center h-full pt-10">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Aucun utilisateur trouvé</h1>
          <p className="text-gray-600 dark:text-white">Cliquez sur le bouton ci-dessus pour charger les utilisateurs</p>
        </div>
      )}
    </div>
  );
}