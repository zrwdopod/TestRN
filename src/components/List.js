import React, {Component} from 'react';
import {
    ListView,
    FlatList,
    StyleSheet
} from 'react-native';
import {connect} from 'react-redux';

import Card from './Card';

class List extends Component {
    constructor(props) {
        super(props);
    }

    componentWillMount(){
    }

    componentDidMount(){
    }

    shouldComponentUpdate(nextProps,nextState){
        return true;
    }
    render() {
        let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        let dataSource = ds.cloneWithRows(this.props.list);
        let renderObj;
        switch (this.props.listType) {
            case 'list':
                renderObj =
                    <ListView style={styles.listView}
                              dataSource={dataSource}
                              renderRow={(rowData) => <Card rowData={rowData}></Card>}>
                    </ListView>;
                break;

            case 'flat':
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
const styles = StyleSheet.create({
    listView: {
        margin: 10,
        backgroundColor: '#ffffff',
        width: '100%',
        maxHeight: 500,
    }
});

export default connect(
    (state) => ({
        list: state.listReducer.list,
        listType: state.listReducer.listType,
    }),
    (dispatch) => ({
        xxx: () => {
            // return dispatch(barAction.orderByToggle());
        }
    })
)(List)

