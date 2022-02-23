import React from "react";
import { FlatList, Image, Text, TouchableOpacity, View } from "react-native";
import { buttons, icons, Screensdata, selectedTheme } from "../../config";
import constants from "../../config/constants/constants";
import dummyData from "../../config/constants/dummyData";
import Renderitem from "./Renderitem";
import styles from "./style";

interface CategoryProps {
    navigation: any
    visible: any
    setvisibe: any
    defaultitem: string
    setdefaultitem: React.Dispatch<React.SetStateAction<string>>
    defaulticon:any
    setdefaulticon:any
}

const CategoryScreen = (props: CategoryProps) => {
    const { navigation, visible, setvisibe,defaultitem,setdefaultitem,setdefaulticon,defaulticon } = props





    return (
        <View style={styles(selectedTheme).mainconatiner}>
            <View style={styles(selectedTheme).conatiner}>
                <TouchableOpacity
                    style={styles(selectedTheme).leftbutton}
                    onPress={()=>navigation.goBack()}
                >
                    <Image source={icons.Icon.back} style={styles(selectedTheme).headerlefticon} />
                </TouchableOpacity>
                <Text style={styles(selectedTheme).text}>{Screensdata.Home.Categories}</Text>


          <View style={{flex:1,justifyContent:"space-between"}}>
                <FlatList
                    data={constants.categories}
                    extraData={constants.categories}
                    renderItem={({ item, index }) => <Renderitem 
                    item={item} 
                    index={index}
                     defaultitem={defaultitem} 
                     setdefaultitem={setdefaultitem} 
                     setdefaulticon={setdefaulticon}
                     />}
                    numColumns={3}
                    keyExtractor={(_, index) => index.toString()}
                />


                <TouchableOpacity style={styles(selectedTheme).button}
                onPress={() => navigation.navigate("CourseListingModel", {
                    Header: defaultitem,
                    Icon:defaulticon
                  })}>
                    <Text style={styles(selectedTheme).buttontext}>{buttons.CONTINUE} </Text>
                </TouchableOpacity>
         </View>

            </View>
        </View>
    )
}


export default CategoryScreen
