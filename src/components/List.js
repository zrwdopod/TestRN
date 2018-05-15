import React, {Component} from 'react';
import {
    ListView,
    FlatList,
    StyleSheet
} from 'react-native';

import Card from './Card';
import roadImageList from '../assets/mock/road-image.json';
export default class List extends Component {
    constructor(props) {
        super(props);
        let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        let dataList = [];
        let imagePath = 'https://bj.bcebos.com/v1/gaopin-preview/';
        let imageList = roadImageList;

        for (let i = 0, len = 1000; i < len; i++) {
            dataList.push({key: i + '', text: 'row' + i, image: imagePath + imageList[i] + '.jpg'});
        }

        this.state = {
            dataSource: ds.cloneWithRows(dataList),
            flatDS: dataList,
            listType: 'list',
        };
    }

    render() {
        let renderObj;
        switch (this.state.listType) {
            case 'list':
                renderObj =
                    <ListView style={styles.listView}
                              dataSource={this.state.dataSource}
                              renderRow={(rowData) => <Card rowData={rowData}></Card>}>
                    </ListView>;
                break;

            case 'flat':
                renderObj =
                    <FlatList style={styles.listView}
                              data={this.state.flatDS}
                              renderItem={(rowData) => <Card rowData={rowData.item}></Card>}>
                    </FlatList>;
                break;
            default:

                break;
        }
        return (
            renderObj
        );
    }
}
const styles = StyleSheet.create({
    listView: {
        margin: 10,
        backgroundColor: '#ffffff',
        width: '100%',
        maxHeight: 500,
    }
});
