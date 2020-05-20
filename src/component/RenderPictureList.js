import React from "react";
import {Button, Card, Checkbox} from "antd";

function RenderPictureList(props) {
    const {data, selectedRowKeys, onSelectChange, Footer} = props;
    const hasSelected = selectedRowKeys.length > 0;
    const {Meta} = Card;
    return (
        <div>
            <div style={{marginBottom: 16}}>
                <Button type="primary" onClick={() => {
                    onSelectChange([]);
                }}>
                    清空
                </Button>
                <span style={{marginLeft: 8}}>
                    {hasSelected ? `Selected ${selectedRowKeys.length} items` : ''}
                </span>
            </div>
            <div className="flex-center-start">
                {(() => {
                    let array = [];
                    data.forEach((card, index) => {
                        array.push(
                            <div className="view" key={card.id}>
                                <Card hoverable style={{width: '100%', position: 'relative'}}
                                      cover={<img alt={card.title} src={card.src}/>}>
                                    <Meta title={card.title} description={card.title}/>
                                    <Checkbox onChange={(e) => {
                                        onSelectChange([...selectedRowKeys, ...[card.id]]);
                                    }} style={{position: "absolute", top: 0, left: 0}}
                                              checked={selectedRowKeys.includes(card.id)}/>
                                </Card>
                            </div>
                        )
                    })
                    return array;
                })()}
            </div>
            {Footer && <Footer/>}
        </div>
    )
}

export default RenderPictureList;
