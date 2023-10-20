const { Stack, StackProps, Construct } = require('aws-cdk-lib');
const ec2 = require('aws-cdk-lib/aws-ec2');
const iam = require('aws-cdk-lib/aws-iam');
const cdk = require('aws-cdk-lib');

const { Vpc, SecurityGroup, Port } = ec2;

class Problem6CdkStack extends Stack {
  /**
   *
   * @param {Construct} scope
   * @param {string} id
   * @param {StackProps=} props
   */
  constructor(scope, id, props) {
    super(scope, id, props);

    // Create new EC2 Role
    const role = new iam.Role(this, 'NewEc2Role', {
      assumedBy: new iam.CompositePrincipal(
        new iam.ServicePrincipal("autoscaling.amazonaws.com"),
        new iam.ServicePrincipal("ec2scheduled.amazonaws.com"),
        new iam.ServicePrincipal("elasticloadbalancing.amazonaws.com"),
        new iam.ServicePrincipal("spot.amazonaws.com"),
        new iam.ServicePrincipal("spotfleet.amazonaws.com"),
        new iam.ServicePrincipal("transitgateway.amazonaws.com")
      ),
      description: 'An example IAM role in AWS CDK',
    });

    const vpc = new Vpc(this, 'MyVpc', {
      maxAzs: 2, // Customize this as needed
    });

    const webserverSG = new SecurityGroup(this, 'WebServerSecurityGroup', {
      vpc,
      description: 'Security group for the web server EC2 instance',
    });

    // Create EC2 instance
    const ec2Instance = new ec2.Instance(this, 'EC2Instance', {
      vpc,
      vpcSubnets: { subnetType: ec2.SubnetType.PUBLIC },
      role: role, // Use the IAM role created above
      securityGroup: webserverSG, // Use the security group created above
      instanceType: ec2.InstanceType.of(
        ec2.InstanceClass.BURSTABLE2,
        ec2.InstanceSize.MICRO
      ),
      machineImage: ec2.MachineImage.latestAmazonLinux({
        generation: ec2.AmazonLinuxGeneration.AMAZON_LINUX_2,
      }),
      keyName: 'ec2-key-pair', // Replace with your EC2 key pair name
    });
  }
}

module.exports = { Problem6CdkStack };
