import * as React from "react";
import {
  TouchableOpacity,
  StyleSheet,
  View,
  Text,
  Image,
  Button,
  SafeAreaView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import styles from "./Admin.style";

const Action = ({ icon, title, color, screen }) => {
  return (
    <View style={styles.action}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <View style={styles.iconContainer}>
          <FontAwesome name={icon} size={22} color={color} />
        </View>
        <Text style={styles.actionTitle}>{title}</Text>
      </View>
    </View>
  );
};

const ShopMangement = () => {
  return (
    <View style={styles.container}>
      <View style={styles.account_list}>
        <View style={styles.table_title}>
          <Text style={styles.title_text}>
            Danh sách cửa hàng đang hoạt động
          </Text>
        </View>
        <View style={styles.table_content}>
          <View style={styles.table_row}>
            <View style={styles.id}>
              <Text style={styles.id_text}>1</Text>
            </View>
            <View style={styles.email}>
              <Text style={styles.email_text}>Cơm Tấm Phúc Lộc Thọ Q9</Text>
            </View>
            <View style={styles.funtion_section}>
              <Action
                style={styles.action}
                icon={"unlock"}
                color={"green"}
              ></Action>
              <Action
                style={styles.action}
                icon={"edit"}
                color={"orange"}
              ></Action>
              <Action
                style={styles.action}
                icon={"trash"}
                color={"red"}
              ></Action>
            </View>
          </View>
          <View style={styles.table_row}>
            <View style={styles.id}>
              <Text style={styles.id_text}>1</Text>
            </View>
            <View style={styles.email}>
              <Text style={styles.email_text}>Cơm Tấm Phúc Lộc Thọ Q9</Text>
            </View>
            <View style={styles.funtion_section}>
              <Action
                style={styles.action}
                icon={"unlock"}
                color={"green"}
              ></Action>
              <Action
                style={styles.action}
                icon={"edit"}
                color={"orange"}
              ></Action>
              <Action
                style={styles.action}
                icon={"trash"}
                color={"red"}
              ></Action>
            </View>
          </View>
          <View style={styles.table_row}>
            <View style={styles.id}>
              <Text style={styles.id_text}>1</Text>
            </View>
            <View style={styles.email}>
              <Text style={styles.email_text}>Cơm Tấm Phúc Lộc Thọ Q9</Text>
            </View>
            <View style={styles.funtion_section}>
              <Action
                style={styles.action}
                icon={"unlock"}
                color={"green"}
              ></Action>
              <Action
                style={styles.action}
                icon={"edit"}
                color={"orange"}
              ></Action>
              <Action
                style={styles.action}
                icon={"trash"}
                color={"red"}
              ></Action>
            </View>
          </View>
          <View style={styles.table_row}>
            <View style={styles.id}>
              <Text style={styles.id_text}>1</Text>
            </View>
            <View style={styles.email}>
              <Text style={styles.email_text}>Cơm Tấm Phúc Lộc Thọ Q9</Text>
            </View>
            <View style={styles.funtion_section}>
              <Action
                style={styles.action}
                icon={"unlock"}
                color={"green"}
              ></Action>
              <Action
                style={styles.action}
                icon={"edit"}
                color={"orange"}
              ></Action>
              <Action
                style={styles.action}
                icon={"trash"}
                color={"red"}
              ></Action>
            </View>
          </View>
          <View style={styles.table_row}>
            <View style={styles.id}>
              <Text style={styles.id_text}>1</Text>
            </View>
            <View style={styles.email}>
              <Text style={styles.email_text}>Cơm Tấm Phúc Lộc Thọ Q9</Text>
            </View>
            <View style={styles.funtion_section}>
              <Action
                style={styles.action}
                icon={"unlock"}
                color={"green"}
              ></Action>
              <Action
                style={styles.action}
                icon={"edit"}
                color={"orange"}
              ></Action>
              <Action
                style={styles.action}
                icon={"trash"}
                color={"red"}
              ></Action>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.account_list}>
        <View style={styles.table_title}>
          <Text style={styles.title_text}>
            Danh sách cửa hàng tạm ngưng hoạt động
          </Text>
        </View>
        <View style={styles.table_content}>
          <View style={styles.table_row}>
            <View style={styles.id}>
              <Text style={styles.id_text}>1</Text>
            </View>
            <View style={styles.email}>
              <Text style={styles.email_text}>Cơm Tấm Phúc Lộc Thọ Q9</Text>
            </View>
            <View style={styles.funtion_section}>
              <Action
                style={styles.action}
                icon={"lock"}
                color={"black"}
              ></Action>
              <Action
                style={styles.action}
                icon={"edit"}
                color={"orange"}
              ></Action>
              <Action
                style={styles.action}
                icon={"trash"}
                color={"red"}
              ></Action>
            </View>
          </View>
          <View style={styles.table_row}>
            <View style={styles.id}>
              <Text style={styles.id_text}>1</Text>
            </View>
            <View style={styles.email}>
              <Text style={styles.email_text}>Cơm Tấm Phúc Lộc Thọ Q9</Text>
            </View>
            <View style={styles.funtion_section}>
              <Action
                style={styles.action}
                icon={"lock"}
                color={"black"}
              ></Action>
              <Action
                style={styles.action}
                icon={"edit"}
                color={"orange"}
              ></Action>
              <Action
                style={styles.action}
                icon={"trash"}
                color={"red"}
              ></Action>
            </View>
          </View>
          <View style={styles.table_row}>
            <View style={styles.id}>
              <Text style={styles.id_text}>1</Text>
            </View>
            <View style={styles.email}>
              <Text style={styles.email_text}>Cơm Tấm Phúc Lộc Thọ Q9</Text>
            </View>
            <View style={styles.funtion_section}>
              <Action
                style={styles.action}
                icon={"lock"}
                color={"black"}
              ></Action>
              <Action
                style={styles.action}
                icon={"edit"}
                color={"orange"}
              ></Action>
              <Action
                style={styles.action}
                icon={"trash"}
                color={"red"}
              ></Action>
            </View>
          </View>
          <View style={styles.table_row}>
            <View style={styles.id}>
              <Text style={styles.id_text}>1</Text>
            </View>
            <View style={styles.email}>
              <Text style={styles.email_text}>Cơm Tấm Phúc Lộc Thọ Q9</Text>
            </View>
            <View style={styles.funtion_section}>
              <Action
                style={styles.action}
                icon={"lock"}
                color={"black"}
              ></Action>
              <Action
                style={styles.action}
                icon={"edit"}
                color={"orange"}
              ></Action>
              <Action
                style={styles.action}
                icon={"trash"}
                color={"red"}
              ></Action>
            </View>
          </View>
          <View style={styles.table_row}>
            <View style={styles.id}>
              <Text style={styles.id_text}>1</Text>
            </View>
            <View style={styles.email}>
              <Text style={styles.email_text}>Cơm Tấm Phúc Lộc Thọ Q9</Text>
            </View>
            <View style={styles.funtion_section}>
              <Action
                style={styles.action}
                icon={"lock"}
                color={"black"}
              ></Action>
              <Action
                style={styles.action}
                icon={"edit"}
                color={"orange"}
              ></Action>
              <Action
                style={styles.action}
                icon={"trash"}
                color={"red"}
              ></Action>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default ShopMangement;