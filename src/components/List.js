import React, {Component} from 'react';
import {
    ListView,
    FlatList,
    StyleSheet
} from 'react-native';
import {connect} from 'react-redux';
import *as listTypes from '../constants/listTypes';
import Card from './Card';


const styles = StyleSheet.create({
    listView: {
        margin: 10,
        backgroundColor: '#ffffff',
        width: '100%',
        maxHeight: 500,
    }
});


class List extends Component {
    constructor(props) {
        super(props);
    }

    shouldComponentUpdate(nextProps, nextState) {
        return true;
    }

    render() {
        let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        let dataSource = ds.cloneWithRows(this.props.list);
        let renderObj;
        switch (this.props.listType) {
            case listTypes.LIST_VIEW:
                renderObj =
                    <ListView style={styles.listView}
                              dataSource={dataSource}
                              renderRow={(rowData) => <Card rowData={rowData}></Card>}>
                    </ListView>;
                break;

            case listTypes.FLAT_LIST:
                renderObj =
                    <FlatList style={styles.listView}
                              data={this.props.list}
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

// this is a container component,responsible for organization state
export default connect(
    (rootState) => (rootState.list),
    (dispatch) => ({
        xxx: () => {
        }
    })
)(List)

