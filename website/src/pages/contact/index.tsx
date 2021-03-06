import { Link } from 'gatsby'
import EmailIcon from 'mdi-react/EmailIcon'
import GithubCircleIcon from 'mdi-react/GithubCircleIcon'
import LinkedinBoxIcon from 'mdi-react/LinkedinBoxIcon'
import MapMarkerIcon from 'mdi-react/MapMarkerIcon'
import TwitterIcon from 'mdi-react/TwitterIcon'
import React from 'react'
import { ContentPage } from '../../components/content/ContentPage'
import { ContentSection } from '../../components/content/ContentSection'
import Layout from '../../components/Layout'

export default ((props: any) => (
    <Layout location={props.location}>
        <ContentPage title="Contact Sourcegraph" description="Contact a real human being on our team.">
            <ContentSection color="white" className="py-6">
                <div className="row">
                    <div className="col-md-6 mb-4 pb-1">
                        <div className="card">
                            <h5 className="card-header">Product support</h5>
                            <div className="card-body">
                                <p className="card-text">For help using Sourcegraph:</p>
                            </div>
                            <div className="list-group list-group-flush">
                                <a
                                    className="list-group-item list-group-item-action"
                                    href="https://github.com/sourcegraph/sourcegraph/issues"
                                    target="_blank"
                                >
                                    <GithubCircleIcon /> File a public issue
                                </a>
                                <a
                                    className="list-group-item list-group-item-action"
                                    href="mailto:support@sourcegraph.com"
                                    target="_blank"
                                >
                                    <EmailIcon /> Email support@sourcegraph.com
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 mb-4 pb-1">
                        <div className="card">
                            <h5 className="card-header">Sales</h5>
                            <div className="card-body">
                                <p className="card-text">For information about products and purchasing:</p>
                                <Link className="btn btn-outline-primary stretched-link" to="/contact/sales">
                                    Contact sales
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 mb-4 pb-1">
                        <div className="card">
                            <h5 className="card-header">Jobs</h5>
                            <div className="card-body">
                                <p className="card-text">For information about joining our team:</p>
                                <Link className="btn btn-outline-primary stretched-link" to="/contact/sales">
                                    See career opportunities
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 mb-4 pb-1">
                        <div className="card">
                            <h5 className="card-header">Everything else</h5>
                            <div className="list-group list-group-flush">
                                <a
                                    className="list-group-item list-group-item-action"
                                    href="mailto:hi@sourcegraph.com"
                                    target="_blank"
                                >
                                    <EmailIcon /> hi@sourcegraph.com
                                </a>
                                <a
                                    className="list-group-item list-group-item-action"
                                    href="https://twitter.com/srcgraph"
                                    target="_blank"
                                >
                                    <TwitterIcon /> @srcgraph
                                </a>
                                <a
                                    className="list-group-item list-group-item-action"
                                    target="_blank"
                                    href="https://github.com/sourcegraph"
                                >
                                    <GithubCircleIcon /> github.com/sourcegraph
                                </a>
                                <a
                                    className="list-group-item list-group-item-action"
                                    target="_blank"
                                    href="https://www.linkedin.com/company/sourcegraph"
                                >
                                    <LinkedinBoxIcon /> Sourcegraph on LinkedIn
                                </a>
                                <div className="list-group-item d-flex p-relative">
                                    <MapMarkerIcon className="mr-1" />
                                    <div>
                                        Sourcegraph
                                        <br />
                                        142 Minna St, 2nd Floor
                                        <br />
                                        San Francisco, CA 94105 (USA)
                                        <br />
                                        <small>
                                            <a target="_blank" href="https://goo.gl/maps/LqTFnekUjRb9N12q6">
                                                View on Google Maps
                                            </a>
                                        </small>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </ContentSection>
        </ContentPage>
    </Layout>
)) as React.FunctionComponent<any>

/*
## Around the web

## Plans, pricing, sales

For enterprise accounts or any questions about getting Sourcegraph for your private code, <a href="/contact/sales">submit our contact form</a>, or email us at <a href="mailto:sales@sourcegraph.com">sales@sourcegraph.com</a>.

## In the real world

*/
