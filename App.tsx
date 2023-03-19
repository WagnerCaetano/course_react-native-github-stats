import { useCallback, useState } from "react";
import { SafeAreaView, ScrollView } from "react-native";
import CardList from "./components/CardList";
import SearchBox from "./components/SearchBox";
import User from "./components/User";

export type Data = {
  avatar_url: string;
  followers: string | number;
  following: string | number;
  login: string;
  public_repos: string | number;
};

export default function App() {
  const [data, setData] = useState<Data>();

  const search = useCallback((searchTerm: string) => {
    if (searchTerm?.length <= 0) {
      alert("Please enter something here");
      return;
    }

    fetch(`https://api.github.com/users/${searchTerm}`)
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);
  return (
    <SafeAreaView className="bg-black flex-1">
      <ScrollView
        keyboardShouldPersistTaps="handled"
        className="h-screen p-4 mx-auto"
      >
        <SearchBox onSearch={search} />
        {data && (
          <>
            <User
              src={data.avatar_url}
              username={data.login}
            /> <CardList data={data} />
          </>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}
