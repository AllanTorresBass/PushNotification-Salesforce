import React, { useEffect, useState } from "react";
import { View, Button } from "react-native";
import readSubscriptionToNotification from "../functions/readSubscriptionToNotification";
import updateSubscriptionToNotification from "../functions/updateSubscriptionToNotifications";
const SubscriptionIssuesNotification = ({ token }) => {
  const [subcription, setSubcription] = useState({});
  const [flag, setFlag] = useState(false);

  useEffect(() => {
    (() => {
      readSubscriptionToNotification("Issue", token).then((res) =>
        setSubcription(res)
      );
    })();

    return () => {};
  }, []);
  // console.log(
  //   "subcription a Issues Notification: ",
  //   subcription !== undefined ? subcription : ""
  // );

  const handelSubscription = () => {
    updateSubscriptionToNotification("Issue", token, subcription[0]?.active);
    // setSubcription(undefined);
    readSubscriptionToNotification("Issue", token).then((res) =>
      setSubcription(res)
    );
  };
  return (
    <View>
      <Button
        onPress={() => {
          handelSubscription();
          setFlag(!flag);
        }}
        title="Subscription to Issues Notification"
        color={subcription[0]?.active ? "green" : "red"}
      />
    </View>
  );
};

export default SubscriptionIssuesNotification;